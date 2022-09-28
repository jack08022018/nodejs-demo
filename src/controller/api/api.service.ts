import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from '../../repository/employees/employees.repository';
import { TitlesRepository } from '../../repository/titles/titles.repository';
import { DataSource, In } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { EmployeesEntity } from '../../repository/employees/employees.entity';
import { TitlesEntity } from '../../repository/titles/titles.entity';

@Injectable()
export class ApiService {
    constructor(
        private readonly employeesRepository: EmployeesRepository,
        private readonly titlesRepository: TitlesRepository,
        // private readonly salaryRepository: SalaryRepository,

        @InjectDataSource()
        private dataSource: DataSource
    ) {}

    async getEmployeeInfo(): Promise<any> {
        // const salary = await this.salaryRepository.findByEmpNo()
        const employees = await this.employeesRepository.findByEmpNo()
        const titles = await this.titlesRepository.findTitle()
        return {
            employees: employees,
            titles: titles,
            // salary: salary,
        }
    }

    async updateEmployee(): Promise<any> {
        await this.dataSource.manager.transaction("SERIALIZABLE", async (transactionManager) => {
            await this.employeesRepository.updateEmployee(transactionManager)
            await this.titlesRepository.updateTitle(transactionManager)
            // throw new Error('sdas')
        })
    }
}
