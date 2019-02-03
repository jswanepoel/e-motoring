using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace MigrationService
{
    public class Configuration
    {
        public const string MIGRATION_FILE_PATH = "MigrationFilePath";
        public const string MIGRATION_SCHEMA_NAME = "MigrationShemaName";
        public const string CREATEDATABASE = "CreateDatabase";

        private readonly IConfigurationBuilder builder;
        private readonly IConfigurationRoot configuration;

        public Configuration()
        {
            builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            configuration = builder.Build();
        }

        public string MigrationFilePath => GetMigrationFilePath();

        private string GetMigrationFilePath()
        {
            string result = GetAppSetting(MIGRATION_FILE_PATH);
            if (result.EndsWith(Path.DirectorySeparatorChar.ToString()) == false)
            {
                result = $"{result}{Path.DirectorySeparatorChar}";
            }

            return result;
        }

        public string MigrationSchemaName => GetMigrationSchemaName(MIGRATION_SCHEMA_NAME);
        public string DefaultConnectionString => GetDefaultConnectionString();
        public string DDLFilePath => GetDDLFilePath();

        public string CreateDatabase => GetCreateDatabaseFlag();

        private string GetCreateDatabaseFlag()
        {
            return GetAppSetting(CREATEDATABASE);
        }

        private string GetDDLFilePath()
        {
            return $"{MigrationFilePath}{MigrationSchemaName}";
        }

        private string GetMigrationSchemaName(string schema)
        {
            return GetAppSetting(schema);
        }

        private string GetDefaultConnectionString()
        {
            return configuration.GetConnectionString("DefaultConnection");
        }

        private string GetAppSetting(string setting)
        {
            try
            {
                string value = configuration[setting];
                return value;
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Unable to extract {setting} from configuration. {ex.Message}");
            }
        }
    }
}