import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SalariesEntity } from './salary.entity';

@Injectable()
export class SalaryService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private salaryRepository: Repository<SalariesEntity>,
  ) {}

  async findAll(): Promise<SalariesEntity[]> {
    return this.salaryRepository.find();
  }
}