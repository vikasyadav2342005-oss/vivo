using ExpensesFeature.Application.Repository;
using HRMS.Core.Postgres.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ExpensesFeature.Infrastructure
{
    public static class ConfigureServiceExtension
    {
        public static IServiceCollection AddExpenseDependency(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IExpenseRepository, ExpenseRepository>();
            services.AddScoped<IPostgresEntityConfigurator, ExpenseEntityConfigurator>();
            return services;
        }
    }
}
