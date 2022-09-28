import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database.module';
import { salaryProviders } from './salary.providers';
import { SalaryRepository } from './salary.repository';

@Module({
  imports: [DatabaseModule],
  exports: [SalaryRepository],
  providers: [
    ...salaryProviders,
    SalaryRepository,
  ],
})
export class SalaryModule {}