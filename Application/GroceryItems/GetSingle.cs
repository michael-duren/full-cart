using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.GroceryItems
{
    public class GetSingle
    {
        public class Query : IRequest<Result<GroceryItem>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<GroceryItem>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<GroceryItem>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var item = await _context.GroceryItems.FindAsync(request.Id);

                return Result<GroceryItem>.Success(item);
            }
        }
    }
}
