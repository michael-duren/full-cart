using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.GroceryItems
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var groceryItem = await _context.GroceryItems.FindAsync(request.Id);

                if (groceryItem == null)
                    return null;

                _context.Remove(groceryItem);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result)
                    return Result<Unit>.Failure("Failed to delete Grocery Item");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
