using Application.GroceryLists;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class GroceryListsController : BaseApiController
    {
        [HttpGet] // api/grocerylists
        public async Task<ActionResult<List<GroceryList>>> GetGroceryLists()
        {
            return await Mediator.Send(new GetAll.Query());
        }

        [HttpGet("{Id}")] // api/grocerylists/woaief
        public async Task<ActionResult<GroceryList>> GetGroceryList(Guid id)
        {
            return await Mediator.Send(new GetSingle.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroceryList(GroceryList groceryList)
        {
            return Ok(await Mediator.Send(new Create.Command { GroceryList = groceryList }));
        }
    }
}
