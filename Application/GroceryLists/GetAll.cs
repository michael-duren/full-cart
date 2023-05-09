using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.GroceryLists
{
    public class GetAll
    {
        public class Query : IRequest<List<GroceryList>> { }

        public class Handler : IRequestHandler<Query, List<GroceryList>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<GroceryList>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                return await _context.GroceryLists.ToListAsync();
            }
        }
    }
}
