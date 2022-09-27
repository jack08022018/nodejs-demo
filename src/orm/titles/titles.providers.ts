import { DataSource } from 'typeorm';
import { TitlesEntity } from './titles.entity';

export const titlesProviders = [
  {
    provide: 'TITLES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TitlesEntity),
    inject: ['DATA_SOURCE'],
  },
];