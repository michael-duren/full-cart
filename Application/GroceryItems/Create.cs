using Domain;
using FluentValidation;
using MediatR;
using Persistence;
using Application.Core;

namespace Application.GroceryItems
{
    public class Create
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

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                _context.GroceryItems.Add(request.GroceryItem);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to create Grocery Item");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
