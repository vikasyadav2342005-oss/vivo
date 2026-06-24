using HRMS.Core.Postgres.Repositories;
using ExpensesFeature.Application.DTO;
using ExpensesFeature.Domain;

namespace ExpensesFeature.Application.Repository
{
    public interface IExpenseRepository : IPostgresRepository<ExpenseRecord>
    {
        Task<(IEnumerable<ExpenseRecord> result, int count)> GetAllExpensesWithCountAsync(GetAllExpensesRequest request);
        Task<ExpenseRecord?> GetExpenseAsync(GetAllExpensesRequest request);
    }
}
