import { Injectable, Inject } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { SalariesEntity } from './salary.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalaryRepository {
  constructor(
    @InjectRepository(SalariesEntity)
    private repository: Repository<SalariesEntity>,
  ) {}

  async findByEmpNo(): Promise<SalariesEntity[]> {
    const data =  await this.repository.find({
      select: ['emp_no','salary','from_date','to_date'],
      where: {
        emp_no: In([10001]),
        // from_date: new Date('1986-06-26')
      },
    });
    return data
  }

  async updateEmployee(): Promise<void> {
    await this.repository.save({
      salary: 100,
      where: {
        emp_no: In([10001])
      },
    });
  }
}