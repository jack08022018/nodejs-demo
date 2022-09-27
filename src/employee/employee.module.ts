import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { SalaryModule } from '../salary/salary.module';

@Module({
  imports: [SalaryModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
  ]
})
export class EmployeeModule {}
