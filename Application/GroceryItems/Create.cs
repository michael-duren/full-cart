using Domain;
using MediatR;
using Persistence;

namespace Application.GroceryItems
{
    public class Create
    {
        public class Command : IRequest
        {
            public GroceryItem GroceryItem { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.GroceryItems.Add(request.GroceryItem);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
