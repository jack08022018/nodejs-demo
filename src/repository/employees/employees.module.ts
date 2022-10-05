import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepository } from './employees.repository';
import { EmployeesEntity } from './employees.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  exports: [EmployeesRepository],
  providers: [
    EmployeesRepository,
  ],
})
export class EmployeesModule {}