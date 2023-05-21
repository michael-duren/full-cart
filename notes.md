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

### Users

- DTOs for Login, Register, User
- Account controller inherits from Controller Base and does not user Mediatr, seperating the account controller from the rest of the controllers
- JWT - strings, made up of three different parts seperated by periods. The first part represents the header, tells us the alg. that was used to encrypt the signature of the token.
  The signature is the third part of the token. You do not put any confiential information inside a token. The second part is the payload. Inside token payload we have date information nbf: when can this token start being used, exp: what's the latest date this token can be used, iat: date of when we issue the token. The third part contains a signature, our server will sign token before it leaves server, in order to sign token the server will use a key that's stored on the server. Uses symmetric security, we use the same key to encrypt the signature as we use to decrypt the signature. After login, client will store JWT token sent from server for a period of time, we'll use local storage. We pass the token for each request that needs auth in the header, server will verify token with it's token key.
- For more information on JWT check [here](https://jwt.io/introduction)
- TokenService.cs: uses System.IdentityModel.Tokens.Jwt for working with JWT. Containes claims for what we're passing in token, key, credentials, token descriptor which contains Subject, Expires, and SIgning Credentials. Token is then created and written.
- We then use AddScoped in IdentityServiceExtensions to scope the token to the HTTP Request.
- Using microsoft.aspnetcore.authentication.jwtbearer. Logic for this is contained in Identiy Service Extensions
