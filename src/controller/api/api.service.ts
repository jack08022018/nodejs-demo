import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from '../../repository/employees/employees.repository';
import { TitlesRepository } from '../../repository/titles/titles.repository';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { SalariesEntity } from '../../repository/salary/salary.entity';


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
        await this.dataSource.manager.transaction("SERIALIZABLE", async (transManager) => {
            await this.employeesRepository.updateEmployee(transManager)
            await this.titlesRepository.updateTitle(transManager)
            // let data = await transManager.query(`SELECT * FROM titles`)
            throw new Error('sdas')
        })
    }

    async saveSalary(): Promise<any> {
        await this.dataSource.manager.transaction("SERIALIZABLE", async (transManager) => {
            await transManager.insert(SalariesEntity, {
                emp_no: 10001, 
                salary: 11122, 
                from_date: new Date(), 
                to_date: new Date('1998-06-23')
            });

            // await transManager.update(
            //     SalariesEntity,
            //     {emp_no: 10001, from_date: new Date('2022-10-10')},
            //     {salary: 11120},
            // );

            // await transManager.delete(SalariesEntity, {
            //     emp_no: 10001, 
            //     salary: 11122, 
            // });
        })
    }

}
