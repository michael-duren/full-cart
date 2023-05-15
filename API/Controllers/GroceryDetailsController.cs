using Application.GroceryListDetails;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class GroceryDetailsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<GroceryListDetail>>> GetGroceryListDetails()
        {
            return await Mediator.Send(new GetAll.Query());
        }
    }
}
