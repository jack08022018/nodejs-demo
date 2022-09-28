import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database.module';
import { SalaryRepository } from './salary.repository';

@Module({
  imports: [DatabaseModule],
  exports: [SalaryRepository],
  providers: [
    SalaryRepository,
  ],
})
export class SalaryModule {}