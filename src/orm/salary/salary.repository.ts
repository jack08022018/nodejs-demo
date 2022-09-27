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
      select: {
        emp_no: true,
        salary: true,
        from_date: true,
        to_date: true,
      },
      where: {
        emp_no: In([10001,10002])
      },
    });
    return data
  }
}