import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { EmployeesModule } from '../../repository/employees/employees.module';
import { TitlesModule } from '../../repository/titles/titles.module';

@Module({
  imports: [
    EmployeesModule, 
    // SalaryModule, 
    TitlesModule,
  ],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
