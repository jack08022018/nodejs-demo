import { Injectable, Inject } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { SalariesEntity } from './salary.entity';

@Injectable()
export class SalaryRepository {
  constructor(
    @Inject('SALARY_REPOSITORY')
    private salaryRepository: Repository<SalariesEntity>,
  ) {}

  async findByEmpNo(): Promise<SalariesEntity[]> {
    const data =  await this.salaryRepository.find({
      select: ['emp_no','salary','from_date','to_date'],
      where: {
        emp_no: In([10001]),
        // from_date: new Date('1986-06-26')
      },
    });
    return data
  }

  async updateEmployee(): Promise<void> {
    await this.salaryRepository.save({
      salary: 100,
      where: {
        emp_no: In([10001])
      },
    });
  }
}