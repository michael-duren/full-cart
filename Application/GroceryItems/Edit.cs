using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.GroceryItems
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public GroceryItem GroceryItem { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.GroceryItem).SetValidator(new GroceryItemValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var groceryItem = await _context.GroceryItems.FindAsync(request.GroceryItem.Id);
                if (groceryItem == null)
                    return null;
                _mapper.Map(request.GroceryItem, groceryItem);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to update Grocery Item");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
