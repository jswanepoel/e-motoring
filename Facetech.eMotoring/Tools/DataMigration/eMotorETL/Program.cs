using MigrationService;
using MySQL.Data.Service;
using System;
using System.Linq;

namespace eMotorETL
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            try
            {
                Configuration config = new Configuration();

                FileReader reader = new FileReader(config.DDLFilePath);
                reader.LoadFile();

                FileParser parser = new FileParser(reader.Rows);
                parser.Parse();

                DataService srv = new DataService(config.DefaultConnectionString);
                if (config.CreateDatabase == "1")
                {
                    srv.CreateDataBase();
                    srv.ExecuteNonQuery(parser.CreateTableScript);
                    Console.WriteLine("Database successfully created");
                }

                if ((args != null) && (args.Length > 0))
                {
                    var x = parser.TableDetails.Where(detail => detail.TableName.ToLower() == args[0]).FirstOrDefault();
                    if (x == null)
                        throw new ApplicationException($"Filedetail not found {args[0]}");

                    ProcessFileDetail(config, reader, srv, x);
                }
                else
                {
                    //Parallel.ForEach(parser.TableDetails, x =>

                    foreach (var x in parser.TableDetails)
                    {
                        try
                        {
                            ProcessFileDetail(config, reader, srv, x);
                        }
                        catch(Exception ex)
                        {
                            // don't break on first error continue processing
                            Console.WriteLine($"Error: {ex.Message}");
                        }
                    }
                }

                Console.WriteLine("Success");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            Console.ReadLine();
        }

        private static void ProcessFileDetail(Configuration config, FileReader reader, DataService srv, TableDetail x)
        {
            reader.FilePath = $"{config.MigrationFilePath}{x.FileName}";
            reader.LoadFile();

            try
            {
                string tableName = srv.RemoveSchema(x.TableName);
                srv.InsertRows(tableName, reader.Rows);
                Console.WriteLine($"Completed Inserting rows into  { tableName }");

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error processing { x.TableName }: {ex.Message}");
            }
        }
    }
}