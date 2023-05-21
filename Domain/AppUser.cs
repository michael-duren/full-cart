using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public ICollection<GroceryList> GroceryLists { get; set; }
        public string DisplayName { get; set; }
    }
}
