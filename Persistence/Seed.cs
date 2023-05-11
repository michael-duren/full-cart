using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.GroceryItems.Any())
            {
                return;
            }

            var users = new List<AppUser>
            {
                new AppUser { UserName = "Michael Duren", Email = "michaeld@michaelduren.com" },
                new AppUser { UserName = "Daniel Duren", Email = "daniel@danielduren.com" }
            };

            var items = new List<GroceryItem>
            {
                new GroceryItem { Name = "Broccoli", Price = 4 },
                new GroceryItem { Name = "Steak", Price = 10 }
            };

            await context.AppUsers.AddRangeAsync(users);
            await context.GroceryItems.AddRangeAsync(items);
            await context.SaveChangesAsync();
        }
    }
}
