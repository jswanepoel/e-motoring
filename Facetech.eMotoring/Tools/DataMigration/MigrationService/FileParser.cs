using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MigrationService
{
  public class FileParser
  {
    public const string CREATE_IDENTIFIER = "create table ";

    private readonly List<string> rows;
    private readonly List<TableDetail> tableDetails = new List<TableDetail>();
    private readonly StringBuilder sql = new StringBuilder();
    private Boolean bCreate = false;

    public FileParser(List<string> rows)
    {
      this.rows = rows;
    }

    public void Parse()
    {
      foreach (string row in rows)
      {
        processRow(row);
      };
    }

    public List<TableDetail> TableDetails => GetTableDetails();
    public string CreateTableScript => GetCreateTableScript();

    private string GetCreateTableScript()
    {
      return this.sql.ToString();
    }

    private List<TableDetail> GetTableDetails()
    {
      return this.tableDetails;
    }

    private void processRow(string row)
    {

      if (bCreate == true)
      {
        if (row.StartsWith("  )"))
        {
          bCreate = false;
          sql.AppendLine("  );");
        }
        else
        {
          if (row.ToLower().Contains("constraint") == true)
          {
            row = $"{row.ToLower().Substring(0, row.IndexOf("constraint") - 1)},";
          }

          row = row.Replace("datetime hour to minute", "time");
          row = row.Replace("datetime hour to second", "time");
          row = row.Replace("datetime year to minute", "datetime");
          row = row.Replace("datetime year to fraction(3)", "datetime");
          row = row.Replace("datetime year to second", "datetime");

          if (row.Contains(" usage ") == true)
          {
            row = row.Replace("usage", "`usage`");
          }

          row = row.Replace("byte", "text");  // binary data
          row = row.Replace("char(500)", "text");
          row = row.Replace("nchar(2000)", "text");

          row = row.Replace("money(8,2)", "decimal(8,2)");
          row = row.Replace("money(16,2)", "decimal(16,2)");
          row = row.Replace("varchar(35,1)", "CHAR(35) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(160,10)", "CHAR(160) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(100,10)", "CHAR(100) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(100,1)", "CHAR(100) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(140,10)", "CHAR(140) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(50,2)", "CHAR(50) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(255,1)", "CHAR(255) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(255,10)", "CHAR(255) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(10,1)", "CHAR(10) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(17,1)", "CHAR(17) CHARACTER SET UTF8MB4");
          row = row.Replace("varchar(30,1)", "CHAR(30) CHARACTER SET UTF8MB4");
          row = row.Replace("byte", "bit");


          if (row.ToLower().StartsWith("    primary key (") == true)
          {
            string text = sql.ToString();
            sql.Clear();
            sql.Append(text.TrimEnd(','));
            return;
          }

          sql.Append(row);
        }
      }
      else if (row.StartsWith(TableDetail.FILE_IDENTIFIER) == true)
      {
        TableDetail tableDetail = tableDetails.LastOrDefault();
        string[] words = row.Split(' ');

        tableDetail.FileName = words.FirstOrDefault(x => x.EndsWith(".unl"));

      }
      else if (row.StartsWith(TableDetail.TABLE_IDENTIFIER))
      {
        TableDetail tableDetail = new TableDetail();
        tableDetails.Add(tableDetail);
        string[] words = row.Split(' ');

        tableDetail.TableName = words[2];
      }
      else if (row.Contains(CREATE_IDENTIFIER) == true)
      {
        sql.AppendLine();

        RemoveSchema(ref row);

        sql.AppendLine(row);
        bCreate = true;
      }
    }

    private void RemoveSchema(ref string row)
    {
      string[] items = row.Split(' ');

      string tableName = items.Where(x => x.Contains('.')).FirstOrDefault();
      string tableOnly = tableName.Split('.').LastOrDefault();
      row = row.Replace(tableName, tableOnly);

    }
  }
}