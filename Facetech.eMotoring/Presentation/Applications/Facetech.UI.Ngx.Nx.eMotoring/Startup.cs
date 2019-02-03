using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.DependencyInjection;

namespace Facetech.UI.Ngx.Nx.eMotoring
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSpaStaticFiles(configuration =>
      {
        configuration.RootPath = "wwwroot/apps";
      });
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseHttpsRedirection();
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseSpaStaticFiles();
      app.UseSpa(spa =>
      {
        spa.Options.SourcePath = "wwwroot";
        if (env.IsDevelopment())
        {
          spa.UseAngularCliServer(npmScript: "start");
        }
      });
    }
  }
}
