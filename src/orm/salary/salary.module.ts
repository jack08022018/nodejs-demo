import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database.module';
import { salaryProviders } from './salary.providers';
import { SalaryService } from './salary.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...salaryProviders,
    SalaryService,
  ],
})
export class SalaryModule {}