import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database.module';
import { salaryProviders } from './salary.providers';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';

@Module({
  controllers: [SalaryController],
  imports: [DatabaseModule],
  exports: [SalaryService],
  providers: [
    ...salaryProviders,
    SalaryService,
  ],
})
export class SalaryModule {}