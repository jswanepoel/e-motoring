using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace MySQL.Data.Service
{
    public class DataService
    {
        private readonly string connectionString;

        public DataService(string connectionString)
        {
            this.connectionString = connectionString;
        }

        protected string DataBaseName => GetDataBaseName();

        private string GetDataBaseName()
        {
            string[] entries = connectionString.Split(';');

            string db_param = entries.FirstOrDefault(x => x.ToLower().Contains("database"));
            if (String.IsNullOrEmpty(db_param))
            {
                throw new ApplicationException("unable to get database name from connection string");
            }

            string db_name = db_param.Split('=').LastOrDefault();
            return db_name;
        }

        protected void DropDataBase(string db_name)
        {
            try
            {
                string commandText = $"DROP  DATABASE IF EXISTS { db_name}";
                int result = MySqlHelper.ExecuteNonQuery(connectionString, commandText);
            }
            catch (Exception ex)
            {
                if (ex.Message.ToLower().Contains("unknown database") == false)
                {
                    throw ex;
                }
            }
        }

        protected void CreateDataBase(string db_name)
        {
            string connectionString = GetSystemDBConnectionString();

            string commandText = $"CREATE DATABASE IF NOT EXISTS { db_name }";
            int result = MySqlHelper.ExecuteNonQuery(connectionString, commandText);
        }

        private string GetSystemDBConnectionString()
        {
            return this.connectionString.Replace(DataBaseName, "sys");
        }

        public void CreateDataBase()
        {
            DropDataBase(DataBaseName);
            CreateDataBase(DataBaseName);
        }

        public void ExecuteNonQuery(string commandText)
        {
            UseDataBase(ref commandText);

            MySqlHelper.ExecuteNonQuery(connectionString, commandText);
        }

        private void UseDataBase(ref string commandText)
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"use {DataBaseName};");
            sb.Append(commandText);

            commandText = sb.ToString();
        }


        private string GetTimeFormatByTable(string table)
        {
            switch (table)
            {
                case "v_tmpsignature":
                case "v_tmpsign":
                case "v_signtmp":
                case "v_signature":
                case "v_crpapskip":
                case "v_crprndet":
                case "v_signerr": return "HH:mm";  // hour to minute

                case "v_altdata":
                case "v_wastedcrs": return "HH:mm:ss"; // hour to second

                default: throw new ApplicationException($"Unable to parse {table}");
            }
        }

        private string GetDateTimeFormatByTable(string table)
        {
            switch (table)
            {
                case "v_tmpsignature":
                case "v_tmpsign":
                case "v_signtmp":
                case "v_signature":
                case "v_crpapskip":
                case "v_crprndet":
                case "v_signerr": return "HH:mm";  // hour to minute

                case "v_altdata":
                case "v_wastedcrs": return "HH:mm:ss"; // hour to second

                case "sl_task_param":
                case "v_bnkmsg_log":
                case "v_tranlet_log":
                case "s_sms_errlog":
                case "s_sms_notqueued":
                case "s_sms_queue":
                case "s_sms_queue_arc":
                case "s_task_sms":
                case "v_rev_receipt": return @"yyyy-MM-dd HH:mm:ss"; // datetime year to second   d/M/yyyy"

                case "v_custom_record": return @"yyyy-MM-dd HH:mm"; // datetime year to minute,

                case "v_blacklist_delhis":
                case "v_blacklist_inshis":
                case "v_custom_delhis_1":
                case "v_custom_inshis_1":
                case "v_custom_updhis_1":
                case "v_blacklist_updhis": return @"yyyy-MM-dd HH:mm:ss.000"; // datetime year to fraction(3)

                default: throw new ApplicationException($"Unable to parse {table}");

            }
        }

        private DateTime ParseDateTimeValue(string value, string format)
        {
            return DateTime.ParseExact(value, format, CultureInfo.InvariantCulture);
        }

        public void InsertRows(string tableName, List<string> rows)
        {
            if (rows.Any() == false)
                return;

            // MySqlHelper.ExecuteNonQuery(connectionString, $"delete from {tableName} where 1=1");

            using (MySqlConnection cn = new MySqlConnection(connectionString))
            {
                cn.Open();

                // get list of column names from reader
                using (var reader = MySqlHelper.ExecuteReader(cn, $"select * from {tableName};"))
                {
                    StringBuilder sql = GetInsertColumnsCommand(tableName, reader);

                    AddInsertValueRows(cn, reader, rows, sql, tableName);
                }
            }
        }

        private StringBuilder GetInsertColumnsCommand(string tableName, MySqlDataReader reader)
        {
            StringBuilder sql = new StringBuilder();
            sql.AppendLine($"INSERT INTO { tableName } (");

            for (int i = 0; i < reader.FieldCount; i++)
            {
                string name = $"`{reader.GetName(i)}`";

                sql.Append(name);
                sql.Append(GetLineBreakChar(reader.FieldCount, i));
            }
            sql.AppendLine(" VALUES ");

            return sql;
        }

        public string RemoveSchema(string tableName)
        {
            return tableName.Split('.').LastOrDefault();
        }

        private string GetLineBreakChar(int length, int pos)
        {
            if (pos < length - 1)
            {
                return ",";
            }
            else
            {
                return ")";
            }
        }

        private void AddInsertValueRows(MySqlConnection cn, MySqlDataReader reader, List<string> rows, StringBuilder sql, string tableName)
        {
            int i = 0;
            StringBuilder sbValues = new StringBuilder();
          
            string data = null;

            foreach (var row in rows)
            {
                data += row.Replace(@"\\", @"\").Replace(@"|\|", " ").Replace(@"\|", " ");

                if (row.EndsWith('|') == false)
                {
                    continue;
                }

                string[] cols = data.Split('|');
                data = null;

                if (reader.FieldCount != cols.Length - 1)
                {

                    int sourceIndex = 0;
                    while (sourceIndex + reader.FieldCount < cols.Length)
                    {
                        string[] colData = new string[reader.FieldCount];

                        Array.Copy(cols, sourceIndex, colData, 0, reader.FieldCount);

                        InsertNextBatch(reader, sql, tableName, i,  sbValues, colData);
                        sourceIndex += reader.FieldCount;
                    }

                    continue;
                }

                i = InsertNextBatch(reader, sql, tableName, i, sbValues, cols);
            }

            if (sbValues.Length > 0)
                ExecuteInsertQuery(sql, sbValues);

        }

        private int InsertNextBatch(MySqlDataReader reader, StringBuilder sql, string tableName, int i, StringBuilder sbValues, string[] cols)
        {
            string command = GetInsertValuesCommand(tableName, reader, cols);

            if (String.IsNullOrEmpty(command) == false)
            {
                if (i > 0)
                {
                    sbValues.Append(",");
                }
                sbValues.AppendLine(command);

                i++;

                if ((i > 500) || tableName.Contains("v_signature"))   
                {
                    ExecuteInsertQuery(sql, sbValues);
                    i = 0;
                }
            }

            return i;
        }

        private void ExecuteInsertQuery(StringBuilder sql, StringBuilder sbValues)
        {
            string command = $"{ sql.ToString() }{ sbValues.ToString() };";
            try
            {

                MySqlHelper.ExecuteNonQuery(connectionString, command);

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in command: { sql.ToString() }. { ex.Message }");
            }

            sbValues.Clear();
        }

        private string GetInsertValuesCommand(string table, MySqlDataReader reader, string[] cols)
        {
            
            StringBuilder sql = new StringBuilder();

            sql.Append("(");

            for (int i = 0; i < reader.FieldCount; i++)
            {
                if (string.IsNullOrEmpty(cols[i]) == true)
                {
                    sql.Append("null");
                }
                else
                {
                    string datatype = reader.GetDataTypeName(i);

                    switch (datatype)
                    {
                        case "VARCHAR":
                            {
                                sql.Append($"\"{ MySqlHelper.EscapeString(cols[i]) }\"");
                                break;
                            }

                        case "DATETIME":
                            {
                                try
                                {


                                    string format = GetDateTimeFormatByTable(table);

                                    DateTime date = DateTime.ParseExact(cols[i], format, System.Globalization.CultureInfo.InvariantCulture, DateTimeStyles.AdjustToUniversal);
                                    sql.Append($"\"{date.ToString()}\"");
                                }
                                catch(Exception ex)
                                {
                                    sql.Append("null");
                                }
                                break;
                            }
                        case "DATE":
                            {
                                try
                                {
                                    //string format = GetDateTimeFormatByTable(table);
                                    //DateTime date = DateTime.ParseExact(cols[i], format, System.Globalization.CultureInfo.InvariantCulture);
                                    DateTime date = DateTime.ParseExact(cols[i], @"d/M/yyyy", System.Globalization.CultureInfo.InvariantCulture);
                                    sql.Append($"\"{date.ToString()}\"");
                                }
                                catch(Exception ex)
                                {
                                    sql.Append("null");
                                }
                                break;
                            }
                        case "TIME":
                            {
                                try
                                {
                                    string format = GetTimeFormatByTable(table);
                                    string dateStr = ParseDateTimeValue(cols[i], format).ToString("HH:mm:ss");
                                    sql.Append($"\"{dateStr}\"");
                                }
                                catch(Exception ex)
                                {
                                    sql.Append("null");
                                }
                                break;
                            }
                        default:
                            {
                                sql.Append(cols[i]);
                                break;
                            }
                    }
                }
                sql.Append(GetLineBreakChar(reader.FieldCount, i));
            }
            string command = sql.ToString();
            return command;
        }
    }
}

