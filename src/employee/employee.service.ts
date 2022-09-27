import { Injectable } from '@nestjs/common';
import { SalaryRepository } from '../orm/salary/salary.repository';
import { EmployeesRepository } from '../orm/employees/employees.repository';
import { TitlesRepository } from '../orm/titles/titles.repository';

@Injectable()
export class EmployeeService {
    constructor(
        private readonly salaryRepository: SalaryRepository,
        private readonly employeesRepository: EmployeesRepository,
        private readonly titlesRepository: TitlesRepository
    ) {}

    async getEmployeeInfo(): Promise<any> {
        const salary = await this.salaryRepository.findByEmpNo()
        const employees = await this.employeesRepository.findByEmpNo()
        const titles = await this.titlesRepository.findTitle()
        return {
            employees: employees,
            titles: titles,
            salary: salary,
        }
    }
}
