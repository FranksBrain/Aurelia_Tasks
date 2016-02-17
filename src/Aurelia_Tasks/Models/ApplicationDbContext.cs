using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;

namespace Aurelia_Tasks.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<TaskItem> TaskItems { get; set; }
        public DbSet<TaskNote> TaskNotes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
