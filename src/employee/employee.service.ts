import { Injectable } from '@nestjs/common';
import { SalaryRepository } from '../orm/salary/salary.repository';
import { EmployeesRepository } from '../orm/employees/employees.repository';

@Injectable()
export class EmployeeService {
    constructor(
        private readonly salaryRepository: SalaryRepository,
        private readonly employeesRepository: EmployeesRepository
    ) {}

    async getEmployeeInfo(): Promise<any> {
        const salary = await this.salaryRepository.findByEmpNo()
        const employees = await this.employeesRepository.findByEmpNo()
        return {
            employees: employees,
            salary: salary,
        }
    }
}
