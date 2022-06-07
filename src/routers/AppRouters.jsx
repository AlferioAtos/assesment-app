
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ActiveCompanyEmployees } from "../components/ActiveCompanyEmployees/ActiveCompanyEmployees";
import { CompanyRelatedEmplyees } from "../components/CompanyRelatedEmployees/CompanyRelatedEmplyees";
import { Home } from "../components/Home/Home";
import { SalaryByGender } from "../components/SalaryByGender/SalaryByGender";
import { SortedBySalary } from "../components/sotedBySalary/SortedBySalary";
import { NavBar } from "../components/ui/NavBar";
import { VehicleApp } from "../components/VehicleApp/VehicleApp";
export const AppRouters = () =>
{
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/RelatedCompanies" element={<CompanyRelatedEmplyees />} />
                <Route path="/ActiveCompanies" element={<ActiveCompanyEmployees />} />
                <Route path="/SalaryByGender" element={<SalaryByGender />} />
                <Route path="/SortBySalary" element={<SortedBySalary />} />
                <Route path="/VehicleApp" element={<VehicleApp />} />
            </Routes>
        </BrowserRouter>
    )
}
