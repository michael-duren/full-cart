using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Email { get; set; }

        [Required]
        [RegularExpression(
            @"[a-zA-Z''-'\d!@#$%^&]{8,40}",
            ErrorMessage = "Password must container an upper and lower case letter, a number, and a special character. Password also must be 8 characters or more."
        )]
        public string Password { get; set; }

        [Required]
        [EmailAddress]
        public string DisplayName { get; set; }

        [Required]
        public string UserName { get; set; }
    }
}
