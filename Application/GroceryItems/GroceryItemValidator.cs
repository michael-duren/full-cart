using Domain;
using FluentValidation;

namespace Application.GroceryItems
{
    public class GroceryItemValidator : AbstractValidator<GroceryItem>
    {
        public GroceryItemValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Price).NotEmpty();
            RuleFor(x => x.Category).NotEmpty();
        }
    }
}
