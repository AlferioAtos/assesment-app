import { NavLink, Link } from "react-router-dom";
export const NavBar = () =>
{
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            >
                React Assesments
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/"
                    >
                        First
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/ActiveCompanies"
                    >
                        SecondA
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/SalaryByGender"
                    >
                        SecondB
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        to="/SortBySalary"
                    >
                        SecondC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        className="nav-item nav-link"
                        to="/VehicleApp"
                    >
                        Senior Assesment
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
