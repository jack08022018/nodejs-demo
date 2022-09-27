import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { UsersModule } from './users/users.module';
import { APP_FILTER, APP_PIPE, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/http-exception.filter';
import { AllExceptionsFilter } from './common/AllExceptionsFilter';
import { ValidationPipe } from './common/ValidationPipe';
import { LoggingInterceptor } from './common/LoggingInterceptor';
import { SalaryModule } from './salary/salary.module';

@Module({
  imports: [EmployeeModule, UsersModule, SalaryModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
