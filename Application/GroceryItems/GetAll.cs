using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.GroceryItems
{
    public class GetAll
    {
        public class Query : IRequest<List<GroceryItem>> { }

        public class Handler : IRequestHandler<Query, List<GroceryItem>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<GroceryItem>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                return await _context.GroceryItems.ToListAsync();
            }
        }
    }
}
