## Backend Notes

### API Error Handling

- exceptions cost more than a normal API response
- avoid using exceptions for program flow/error flow
- use result objects instead of throwing exceptions
- created a resutl obj class in Application/Core/Result.cs
- this is then implemented in the baseapi class
- which we can use in the controllers

### API Exception Handling Middleware

- We need to use middleware to use the AppException (created in Application/Core/AppException.cs)
- Middleware > HTTP Pipeline [documentation](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-7.0)
- Check API/Middleware/ExceptionMiddleware.cs for implementing AppException
