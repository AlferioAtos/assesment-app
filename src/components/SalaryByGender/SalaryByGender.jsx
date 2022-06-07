import { useCompanySalaryByGender } from "../../hooks/companyHooks"

export const SalaryByGender = () =>
{
    const companies = useCompanySalaryByGender();
    return (
        <div className="container-fluid">
            <h2>Companies salary by gender</h2>
            <hr />
            {
                companies.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr key='a'>
                                <th scope="col">Company</th>
                                <th scope="col">Male Salary</th>
                                <th scope="col">Female Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                companies.map(company =>
                                {
                                    return (
                                        <tr key={company.id}>
                                            <td>{company.name}</td>
                                            <td>$ {company.maleSalary}</td>
                                            <td>$ {company.femaleSalary}</td>
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
