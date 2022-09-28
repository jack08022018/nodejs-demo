import { DataSource } from 'typeorm';
import { EmployeesEntity } from './employees.entity';

export const employeesProviders = [
  {
    provide: 'EMPLOYEES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(EmployeesEntity),
    inject: ['DATA_SOURCE'],
  },
];