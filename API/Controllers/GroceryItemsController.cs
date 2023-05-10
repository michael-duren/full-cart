using Application.GroceryItems;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class GroceryItemsController : BaseApiController
    {
        [HttpGet] // api/groceryitems
        public async Task<ActionResult<List<GroceryItem>>> GetGroceryItems()
        {
            return await Mediator.Send(new GetAll.Query());
        }

        [HttpGet("{Id}")] // api/grocerylists/woaief
        public async Task<ActionResult<GroceryItem>> GetGroceryItem(Guid id)
        {
            return await Mediator.Send(new GetSingle.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroceryItem(GroceryItem groceryItem)
        {
            return Ok(await Mediator.Send(new Create.Command { GroceryItem = groceryItem }));
        }
    }
}
