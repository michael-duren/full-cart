using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Application.Core;

namespace Application.GroceryItems
{
    public class GetAll
    {
        public class Query : IRequest<Result<List<GroceryItem>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GroceryItem>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<GroceryItem>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                return Result<List<GroceryItem>>.Success(await _context.GroceryItems.ToListAsync());
            }
        }
    }
}
