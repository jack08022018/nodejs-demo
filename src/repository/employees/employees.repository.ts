import { Injectable, Inject } from '@nestjs/common';
import { Repository, In } from 'typeorm';
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
    private employeesRepository: Repository<EmployeesEntity>,
  ) {}

  async findByEmpNo(): Promise<EmployeesEntity[]> {
    const data =  await this.employeesRepository.find({
      select: ['emp_no','first_name','gender','birth_date'],
      where: {
        emp_no: In([10001])
      },
    });
    return data
  }

  async updateEmployee(): Promise<void> {
    // await this.employeesRepository.save(emp);

    await this.employeesRepository.update(
      {emp_no: 10001},
      {first_name: 'Georgi xx'}
    );
  }

}