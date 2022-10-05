import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryRepository } from './salary.repository';
import { SalariesEntity } from './salary.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([SalariesEntity])],
  exports: [SalaryRepository],
  providers: [
    SalaryRepository,
  ],
})
export class SalaryModule {}