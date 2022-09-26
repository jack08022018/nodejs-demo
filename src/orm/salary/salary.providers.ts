import { DataSource } from 'typeorm';
import { SalariesEntity } from './salary.entity';

export const salaryProviders = [
  {
    provide: 'SALARY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(SalariesEntity),
    inject: ['DATA_SOURCE'],
  },
];