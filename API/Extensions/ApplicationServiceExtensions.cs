using Application.Core;
using Application.GroceryItems;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services,
            IConfiguration config
        )
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("Default"));
            });
            services.AddCors(opt =>
            {
                opt.AddPolicy(
                    "CorsPolicy",
                    policy =>
                    {
                        policy
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .WithOrigins("http://localhost:5173");
                    }
                );
            });

            services.AddMediatR(typeof(GetAll.Handler));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}
