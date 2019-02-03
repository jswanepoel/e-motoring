namespace MigrationService
{
  public class TableDetail
  {
    public const string TABLE_IDENTIFIER = "{ TABLE ";
    public const string FILE_IDENTIFIER = "{ unload file name = ";

    public string TableName { get; set; }
    public string FileName { get; set; }
  }
}