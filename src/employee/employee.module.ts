import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { SalaryModule } from '../orm/salary/salary.module';
import { EmployeesModule } from '../orm/employees/employees.module';
import { TitlesModule } from '../orm/titles/titles.module';

@Module({
  imports: [SalaryModule, EmployeesModule, TitlesModule],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
  ]
})
export class EmployeeModule {}
