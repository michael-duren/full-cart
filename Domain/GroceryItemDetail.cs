namespace Domain;

public class GroceryItemDetail
{
    public Guid Id { get; set; }
    public int Quantity { get; set; }
    public Boolean InCart { get; set; }
    public Guid ItemId { get; set; }
    public Guid ListId { get; set; }

    public GroceryItem GroceryItem { get; set; } = null!;
    public GroceryList GroceryList { get; set; } = null!;
}
