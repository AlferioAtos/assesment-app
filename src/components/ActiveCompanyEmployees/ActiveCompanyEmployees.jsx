import { useActiveCompanyInactiveEmployees } from "../../hooks/companyHooks";

export const ActiveCompanyEmployees = () =>
{
    const employees = useActiveCompanyInactiveEmployees();
    return (
        <div className="container-fluid">
            <h2>Inactive Employees from active companies</h2>
            <hr />
            {
                employees.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Status</th>
                                <th scope="col">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee =>
                                {
                                    return (
                                        <>
                                            {employee.employee.map(employeeData =>
                                            {
                                                return (
                                                    <tr key={employeeData.id}>
                                                        <td>{employeeData.name}</td>
                                                        <td>{employeeData.gender}</td>
                                                        <td>{employeeData.status}</td>
                                                        <td>{employee.company}</td>
                                                    </tr>
                                                )
                                            })}
                                        </>

                                    )
                                })
                            }
                        </tbody>

                    </table> : <h4>Loading...</h4>
            }
        </div>
    )
}
