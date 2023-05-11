using Application.GroceryItems;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class GroceryItemsController : BaseApiController
    {
        // private readonly DataContext _context;

        // public GroceryItemsController(DataContext context)
        // {
        //     _context = context;
        // }

        [HttpGet] // api/groceryitems
        public async Task<ActionResult<List<GroceryItem>>> GetGroceryItems()
        {
            // return await _context.GroceryItems.ToListAsync();
            return await Mediator.Send(new GetAll.Query());
        }

        [HttpGet("{Id}")] // api/grocerylists/woaief
        public async Task<ActionResult<GroceryItem>> GetGroceryItem(Guid id)
        {
            return await Mediator.Send(new GetSingle.Query { Id = id });
            // return await _context.GroceryItems.FindAsync(id);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroceryItem(GroceryItem groceryItem)
        {
            return Ok(await Mediator.Send(new Create.Command { GroceryItem = groceryItem }));
        }
    }
}
