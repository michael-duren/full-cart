using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;
using MediatR;

namespace Application.GroceryListDetails
{
    public class GetAll
    {
        public class Query : IRequest<List<GroceryListDetail>> { }

        public class Handler : IRequestHandler<Query, List<GroceryListDetail>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<GroceryListDetail>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                return await _context.GroceryListDetails.ToListAsync();
            }
        }
    }
}
