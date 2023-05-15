using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.GroceryItems
{
    public class Edit
    {
        public class Command : IRequest
        {
            public GroceryItem GroceryItem { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var groceryItem = await _context.GroceryItems.FindAsync(request.GroceryItem.Id);
                _mapper.Map(request.GroceryItem, groceryItem);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
