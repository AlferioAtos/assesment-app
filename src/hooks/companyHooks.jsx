import { useEffect, useState } from 'react';
import { getCompanies, getEmployees } from '../models/companyAppModels';

/* Custom Hook that returns an array of companies with thei employees data */

export const useRelatedCompanies = () =>
{
    const [companiesWithEmployees, setCompaniesWithEmployees] = useState([]);
    useEffect(() =>
    {
        Promise.all([
            getCompanies(),
            getEmployees()
        ]).then(([companies, employees]) =>
        {
            const companiesWithEmployeesReelated = companies.map(company =>
            {
                const companyWithEmployees = { ...company, employees: company.employees.map(employeeid => employees.find(employee => employee.id === employeeid)) }
                return companyWithEmployees;
            })
            setCompaniesWithEmployees(companiesWithEmployeesReelated);
        });
    }, []);
    return companiesWithEmployees;
}

/* Custom Hook that returns an array of inactive employees from active companies */

export const useActiveCompanyInactiveEmployees = () =>
{
    const [activeCompanyInactiveEmployees, setActiveCompanyInactiveEmployees] = useState([]);
    const companies = useRelatedCompanies();
    useEffect(() =>
    {
        if (companies.length > 0)
        {
            const activeCompanies = companies.filter((company) => company.status === 'active')
            const inactiveEmployees = activeCompanies.map(company =>
            {
                return { employee: company.employees.filter(employee => employee.status === 'inactive'), company: company.name }
            }).filter((inactiveEmployees) => inactiveEmployees !== []).reduce((previousEmployee, curentEmployee) => previousEmployee.concat(curentEmployee), []);
            setActiveCompanyInactiveEmployees(inactiveEmployees);
        }
    }, [companies]);
    return activeCompanyInactiveEmployees;
}

/* Custom Hook that returns an array of companies and their salary by employees gender */

export const useCompanySalaryByGender = () =>
{
    const [companySalaryByGender, setCompanySalaryByGender] = useState([]);
    const companies = useRelatedCompanies();
    const getSalaryByGender = (companyToFilter, gender) => companyToFilter.employees
        .filter((employee) => employee.gender === gender)
        .map((employee) => employee.salary)
        .reduce((previousSalary, currentSalary) => previousSalary + currentSalary, 0)
    useEffect(() =>
    {
        const salarByGender = []
        if (companies.length > 0)
        {
            for (let company of companies)
            {
                const salaryGroup = {
                    id: company.id,
                    name: company.name,
                    maleSalary: getSalaryByGender(company, 'male'),
                    femaleSalary: getSalaryByGender(company, 'female'),
                }
                salarByGender.push(salaryGroup)
            }

            setCompanySalaryByGender(salarByGender)
        }
    }, [companies]);
    return companySalaryByGender;
}

/* Custom Hook that returns an array of companies sorted bay total salary */

export const useCompanySortBySalary = () =>
{
    const [companiesSorted, setCompaniesSorted] = useState([]);
    const companies = useRelatedCompanies();

    useEffect(() =>
    {
        const salarySorted = companies.map(company =>
        {
            return {
                id: company.id,
                name: company.name,
                salary: company.employees.reduce((previousSalary, currentSalary) => previousSalary + currentSalary.salary, 0)
            }
        }).sort((companyA, companyB) => companyB.salary - companyA.salary);
        setCompaniesSorted(salarySorted);
    }, [companies]);
    return companiesSorted;
}

