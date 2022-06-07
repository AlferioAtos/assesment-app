
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ActiveCompanyEmployees } from "../components/ActiveCompanyEmployees/ActiveCompanyEmployees";
import { CompanyRelatedEmplyees } from "../components/CompanyRelatedEmployees/CompanyRelatedEmplyees";
import { SalaryByGender } from "../components/SalaryByGender/SalaryByGender";
import { SortedBySalary } from "../components/sotedBySalary/SortedBySalary";
import { NavBar } from "../components/ui/NavBar";
export const AppRouters = () =>
{
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<CompanyRelatedEmplyees />} />
                <Route path="/ActiveCompanies" element={<ActiveCompanyEmployees />} />
                <Route path="/SalaryByGender" element={<SalaryByGender />} />
                <Route path="/SortBySalary" element={<SortedBySalary />} />
            </Routes>
        </BrowserRouter>
    )
}
