import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitlesRepository } from './titles.repository';
import { TitlesEntity } from './titles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TitlesEntity])],
  exports: [TitlesRepository],
  providers: [
    TitlesRepository,
  ],
})
export class TitlesModule {}