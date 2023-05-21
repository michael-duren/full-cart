using Application.GroceryItems;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class GroceryItemsController : BaseApiController
    {
        [HttpGet] // api/groceryitems
        public async Task<IActionResult> GetGroceryItems()
        {
            return HandleResult(await Mediator.Send(new GetAll.Query()));
        }

        [HttpGet("{id}")] // api/groceryitems/woaief
        public async Task<IActionResult> GetGroceryItem(Guid id)
        {
            return HandleResult(await Mediator.Send(new GetSingle.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroceryItem(GroceryItem groceryItem)
        {
            return HandleResult(
                await Mediator.Send(new Create.Command { GroceryItem = groceryItem })
            );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditGroceryItem(Guid id, GroceryItem groceryItem)
        {
            groceryItem.Id = id;
            return HandleResult(
                await Mediator.Send(new Edit.Command { GroceryItem = groceryItem })
            );
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroceryItem(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
