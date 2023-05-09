using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.GroceryLists
{
    public class GetSingle
    {
        public class Query : IRequest<GroceryList>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, GroceryList>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<GroceryList> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                return await _context.GroceryLists.FindAsync(request.Id);
            }
        }
    }
}
