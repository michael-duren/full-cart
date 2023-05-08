namespace Domain;

public class GroceryItem
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public bool InCart { get; set; }
    public int Quantity { get; set; }
}
