namespace Domain;

public class GroceryList
{
    public Guid Id { get; set; }

    public string? Name { get; set; }
    public DateTime ListCreated { get; set; }

    public ICollection<GroceryItem> GroceryItems { get; set; } = null!;
    // public AppUser AppUser { get; set; } = null!;
    // public ICollection<GroceryItemDetail> ItemDetails { get; set; } = null!;
}
