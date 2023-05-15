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

        // write a get method that returns a single grocery item
        [HttpGet("{id}")] // api/groceryitems/woaief
        public async Task<ActionResult<GroceryItem>> GetGroceryItem(Guid id)
        {
            return await Mediator.Send(new GetSingle.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroceryItem(GroceryItem groceryItem)
        {
            return Ok(await Mediator.Send(new Create.Command { GroceryItem = groceryItem }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditGroceryItem(Guid id, GroceryItem groceryItem)
        {
            groceryItem.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { GroceryItem = groceryItem }));
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteGroceryItem(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
