import { Injectable, Inject } from '@nestjs/common';
import { Repository, In, EntityManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeesEntity } from './employees.entity';

@Injectable()
export class EmployeesRepository {
  // constructor(
  //   @Inject('EMPLOYEES_REPOSITORY')
  //   private employeesRepository: Repository<EmployeesEntity>,
  // ) {}
  constructor(
    @InjectRepository(EmployeesEntity)
    private repository: Repository<EmployeesEntity>,
  ) {}

  async findByEmpNo(): Promise<EmployeesEntity[]> {
    const data =  await this.repository.find({
      select: ['emp_no','first_name','gender','birth_date'],
      where: {
        emp_no: In([10001])
      },
    });
    return data
  }

  async updateEmployee(transactionManager: EntityManager): Promise<void> {
    await transactionManager.update(
      EmployeesEntity,
      {emp_no: 10001},
      {first_name: 'Georgi xx'},
    )
  }

}