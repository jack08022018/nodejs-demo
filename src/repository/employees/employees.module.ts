import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepository } from './employees.repository';
import { EmployeesEntity } from './employees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  exports: [EmployeesRepository],
  providers: [
    EmployeesRepository,
  ],
})
export class EmployeesModule {}