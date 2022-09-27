import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database.module';
import { titlesProviders } from './titles.providers';
import { TitlesRepository } from './titles.repository';

@Module({
  imports: [DatabaseModule],
  exports: [TitlesRepository],
  providers: [
    ...titlesProviders,
    TitlesRepository,
  ],
})
export class TitlesModule {}