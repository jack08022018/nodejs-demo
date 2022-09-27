import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database.module';
import { employeesProviders } from './employees.providers';
import { EmployeesRepository } from './employees.repository';

@Module({
  imports: [DatabaseModule],
  exports: [EmployeesRepository],
  providers: [
    ...employeesProviders,
    EmployeesRepository,
  ],
})
export class EmployeesModule {}