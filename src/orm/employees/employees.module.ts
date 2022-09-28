import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { DatabaseModule } from '../../config/database.module';
// import { employeesProviders } from './employees.providers';
import { EmployeesRepository } from './employees.repository';
import { EmployeesEntity } from './employees.entity';

@Module({
  // imports: [DatabaseModule],
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  exports: [EmployeesRepository],
  providers: [
    // ...employeesProviders,
    EmployeesRepository,
  ],
})
export class EmployeesModule {}