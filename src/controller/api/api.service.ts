import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from '../../repository/employees/employees.repository';
import { TitlesRepository } from '../../repository/titles/titles.repository';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class ApiService {
    constructor(
        private readonly employeesRepository: EmployeesRepository,
        private readonly titlesRepository: TitlesRepository,
        // private readonly salaryRepository: SalaryRepository,
        private configService: ConfigService,

        @InjectDataSource()
        private dataSource: DataSource
    ) {}

    async getEmployeeInfo(): Promise<any> {
        // const salary = await this.salaryRepository.findByEmpNo()
        const employees = await this.employeesRepository.findByEmpNo()
        const titles = await this.titlesRepository.findTitle()
        // const port = this.configService.get('http.host')
        return {
            employees: employees,
            titles: titles,
            // salary: salary,
        }
    }

    async updateEmployee(): Promise<any> {
        await this.dataSource.manager.transaction("SERIALIZABLE", async (transManager) => {
            await this.employeesRepository.updateEmployee(transManager)
            await this.titlesRepository.updateTitle(transManager)
            // let data = await transManager.query(`SELECT * FROM titles`)
            throw new Error('sdas')
        })
    }

}
