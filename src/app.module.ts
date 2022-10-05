import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controller/users/users.module';
import { APP_FILTER, APP_PIPE, APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';
import { AllExceptionsFilter } from './config/AllExceptionsFilter';
import { ValidationPipe } from './config/ValidationPipe';
import { LoggingInterceptor } from './config/LoggingInterceptor';
import { ApiModule } from './controller/api/api.module';
import { DatabaseModule } from './config/DatabaseModule';
import { YamlModule } from './config/YamlModule';
import { GlobalHttpModule } from './config/GlobalHttpModule';
import { AuthModule } from './auth/auth.module';
import { EmployeesModule } from './repository/employees/employees.module';
import { TitlesModule } from './repository/titles/titles.module';

@Module({
  imports: [
    YamlModule,
    GlobalHttpModule,
    DatabaseModule,
    AuthModule,

    UsersModule,
    ApiModule,
    EmployeesModule,
    TitlesModule,
  ],
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
    // {
    //   provide: APP_GUARD,
    //   useClass: LoggingInterceptor,
    // },
  ],
})
export class AppModule {}
