namespace Domain;

public class GroceryList
{
    public Guid Id { get; set; }

    public DateTime ListCreated { get; set; }

    public string Name { get; set; }

    public ICollection<GroceryListDetail> GroceryListDetails { get; set; }
}
