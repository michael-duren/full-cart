namespace Domain;

public class GroceryList
{
    public Guid Id { get; set; }
    public GroceryItem[]? GroceryItems { get; set; }
}
