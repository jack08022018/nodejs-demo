import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryRepository } from './salary.repository';
import { SalariesEntity } from './salary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalariesEntity])],
  exports: [SalaryRepository],
  providers: [
    SalaryRepository,
  ],
})
export class SalaryModule {}