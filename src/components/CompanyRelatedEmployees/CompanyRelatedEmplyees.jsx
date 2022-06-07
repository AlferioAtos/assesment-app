import { useRelatedCompanies } from "../../hooks/companyHooks";
export const CompanyRelatedEmplyees = () =>
{
    const companies = useRelatedCompanies();
    return (
        <div className="container-fluid">
            <h2>Companies with employees data</h2>
            <hr />
            {
                companies.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Employees</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                companies.map(company =>
                                {
                                    return (
                                        <tr key={company.id}>
                                            <td>{company.name}</td>
                                            <td>
                                                <ul>
                                                    {
                                                        company.employees.map(employee => <li key={employee.id}>{employee.name}</li>)
                                                    }
                                                </ul>
                                            </td>
                                            <td>{company.status}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table> : <h4>Loading...</h4>
            }
        </div>
    )
}


