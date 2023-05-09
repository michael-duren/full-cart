namespace Domain;

public class GroceryList
{
    public Guid Id { get; set; }

    public DateTime ListCreated { get; set; }

    public AppUser AppUser { get; set; } = null!;
    public ICollection<GroceryItemDetail> ItemDetails { get; set; } = null!;
}
