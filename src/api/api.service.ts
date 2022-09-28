import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from '../orm/employees/employees.repository';

@Injectable()
export class ApiService {
    constructor(
        private readonly employeesRepository: EmployeesRepository,
        // private readonly salaryRepository: SalaryRepository,
        // private readonly titlesRepository: TitlesRepository
    ) {}

    async getEmployeeInfo(): Promise<any> {
        // const salary = await this.salaryRepository.findByEmpNo()
        const employees = await this.employeesRepository.findByEmpNo()
        // const titles = await this.titlesRepository.findTitle()
        return {
            employees: employees,
            // titles: titles,
            // salary: salary,
        }
    }

    async updateEmployee(): Promise<any> {
        await this.employeesRepository.updateEmployee()
        // await this.titlesRepository.updateTitle()
        // throw new Error('asds')
    }
}
