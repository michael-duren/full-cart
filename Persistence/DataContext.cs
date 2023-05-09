using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DataContext : IdentityDbContext<AppUser>
{
    public DataContext(DbContextOptions options)
        : base(options) { }

    public DbSet<AppUser> AppUsers { get; set; } = null!;
    public DbSet<GroceryList> GroceryLists { get; set; } = null!;
    public DbSet<GroceryItemDetail> GroceryItemDetails { get; set; } = null!;
    public DbSet<GroceryItem> GroceryItems { get; set; } = null!;
}
