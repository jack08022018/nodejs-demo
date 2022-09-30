import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class DatabaseModule {
  static async forRoot(): Promise<DynamicModule> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'employees',
            // host: configService.get('host'),
            // port: configService.get('port'),
            // username: configService.get('username'),
            // password: configService.get('password'),
            // database: configService.get('database'),
            autoLoadEntities: true,
            synchronize: false,//alway false
            logging: true,
            keepConnectionAlive: true,
            retryAttempts: 2,
            retryDelay: 1000,
          }),
        }),
      ],
    };
  }
}
