using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class VrstePlesaContext : DbContext
    {

        public VrstePlesaContext(DbContextOptions<VrstePlesaContext> options) : base(options)
        {
          

        }

        public DbSet<VrstePlesa> VrstePlesa { get; set; } 





    }
}
