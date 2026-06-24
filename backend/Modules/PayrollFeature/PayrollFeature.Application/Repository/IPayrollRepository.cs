using HRMS.Core.Postgres.Repositories;
using PayrollFeature.Application.DTO;
using PayrollFeature.Domain;

namespace PayrollFeature.Application.Repository
{
    public interface IPayrollRepository : IPostgresRepository<PayrollRecord>
    {
        Task<(IEnumerable<PayrollRecord> result, int count)> GetAllPayrollsWithCountAsync(GetAllPayrollsRequest request);
        Task<PayrollRecord?> GetPayrollAsync(GetAllPayrollsRequest request);
    }
}
