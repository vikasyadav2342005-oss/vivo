using HRMS.Core.Postgres.Repositories;
using TeamFeature.Application.DTO;
using TeamFeature.Domain;

namespace TeamFeature.Application.Repository
{
    public interface ITeamRepository : IPostgresRepository<TeamMember>
    {
        Task<(IEnumerable<TeamMember> result, int count)> GetAllTeamMembersWithCountAsync(GetAllTeamMembersRequest request);
        Task<TeamMember?> GetTeamMemberAsync(GetAllTeamMembersRequest request);
    }
}
