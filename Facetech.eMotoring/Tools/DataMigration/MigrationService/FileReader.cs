using System;
using System.Collections.Generic;
using System.IO;

namespace MigrationService
{
  public class FileReader
  {
    private string path;

    public FileReader()
    { }

    public FileReader(string path)
        : this()
    {
      this.path = path;
    }

    public string FilePath
    {
      get => path;
      set => path = value;
    }

    private List<string> rows = new List<string>();
    public void LoadFile()
    {
      try
      {
        rows.Clear();
        using (StreamReader reader = File.OpenText(path))
        {
          while (reader.EndOfStream == false)
          {
            string rowData = reader.ReadLine();
            rows.Add(rowData);
          }
        }
      }
      catch (Exception ex)
      {
        throw new ApplicationException($"Unable to locate file at {path}. { ex.Message }");
      }
    }

    public List<string> Rows => rows;
  }
}