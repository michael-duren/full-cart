using Domain;
using MediatR;
using Persistence;

namespace Application.GroceryLists
{
    public class Create
    {
        public class Command : IRequest
        {
            public GroceryList GroceryList { get; set; }
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
                _context.GroceryLists.Add(request.GroceryList);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
