import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TitlesRepository } from './titles.repository';
import { TitlesEntity } from './titles.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([TitlesEntity])],
  exports: [TitlesRepository],
  providers: [
    TitlesRepository,
  ],
})
export class TitlesModule {}