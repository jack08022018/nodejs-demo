import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controller/users/users.module';
import { APP_FILTER, APP_PIPE, APP_INTERCEPTOR, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './config/http-exception.filter';
import { AllExceptionsFilter } from './config/AllExceptionsFilter';
import { ValidationPipe } from './config/ValidationPipe';
import { LoggingInterceptor } from './config/LoggingInterceptor';
import { ApiModule } from './controller/api/api.module';
import { DatabaseModule } from './config/database.module';
import { ConfigModule } from '@nestjs/config';
import configurationYaml from './config/configuration.yaml';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurationYaml],
      isGlobal: true,
      cache: true,
    }),
    DatabaseModule.forRoot(),
    UsersModule,
    ApiModule,
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
