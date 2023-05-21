using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        UserName = "michael",
                        DisplayName = "Michael Duren",
                        Email = "michaeld@michaelduren.com"
                    },
                    new AppUser
                    {
                        UserName = "daniel",
                        DisplayName = "Daniel Duren",
                        Email = "daniel@danielduren.com"
                    },
                };

                foreach (var user in users)
                {
                    Console.WriteLine("SEEDING USER");
                    await userManager.CreateAsync(user, "Pa$$w0rd!123");
                }
                await context.AppUsers.AddRangeAsync(users);
                await context.SaveChangesAsync();
            }

            if (context.GroceryItems.Any())
            {
                return;
            }
            var item = new GroceryItem
            {
                Id = Guid.NewGuid(),
                Name = "Milk",
                Price = 3.99m,
                Category = "Dairy"
            };

            await context.GroceryItems.AddAsync(item);

            var detail = new List<GroceryListDetail>
            {
                new GroceryListDetail
                {
                    Id = Guid.NewGuid(),
                    Quantity = 2,
                    InCart = false,
                    ItemId = item.Id,
                    GroceryItem = item
                }
            };

            var list = new GroceryList { Id = Guid.NewGuid(), Name = "New List", };

            detail[0].ListId = list.Id;
            list.GroceryListDetails = detail;

            await context.GroceryListDetails.AddRangeAsync(detail);
            await context.GroceryLists.AddAsync(list);
            await context.SaveChangesAsync();

            // var users = new List<AppUser>
            // {
            //     new AppUser { UserName = "Michael Duren", Email = "michaeld@michaelduren.com" },
            //     new AppUser { UserName = "Daniel Duren", Email = "daniel@danielduren.com" }
            // };

            // var list = new List<GroceryList>
            // {
            //     new GroceryList
            //     {
            //         Name = "Normal",
            //         GroceryListDetails = new List<GroceryListDetail>
            //         {
            //             new GroceryListDetail
            //             {
            //                 Quantity = 1,
            //                 InCart = false,
            //                 GroceryItem = new GroceryItem
            //                 {
            //                     Name = "Broccoli",
            //                     Price = 4,
            //                     Category = "Veggies"
            //                 },
            //             },
            //             new GroceryListDetail
            //             {
            //                 Quantity = 1,
            //                 InCart = false,
            //                 GroceryItem = new GroceryItem
            //                 {
            //                     Name = "Steak",
            //                     Price = 10,
            //                     Category = "Meat"
            //                 }
            //             }
            //         }
            //     }
            // };

            // await context.GroceryLists.AddRangeAsync(list);
        }
    }
}
