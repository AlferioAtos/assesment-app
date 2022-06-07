import { useCompanySortBySalary } from "../../hooks/companyHooks"

export const SortedBySalary = () =>
{
    const companies = useCompanySortBySalary();
    return (
        <div className="container-fluid">
            <h2>Companies sorted by Salary</h2>
            <hr />
            {
                companies.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                companies.map(company =>
                                {
                                    return (
                                        <tr key={company.id}>
                                            <td>{company.name}</td>
                                            <td>$ {company.salary}</td>
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
