## Backend Notes

### API Error Handling

- exceptions cost more than a normal API response
- avoid using exceptions for program flow/error flow
- use result objects instead of throwing exceptions
- created a resutl obj class in Application/Core/Result.cs
- this is then implemented in the baseapi class
- which we can use in the controllers
