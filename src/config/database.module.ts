import { DynamicModule, Module } from '@nestjs/common';
import { 
  TypeOrmModule, 
} from '@nestjs/typeorm';

@Module({})
export class DatabaseModule {
  static async forRoot(): Promise<DynamicModule> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: () => ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'employees',
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
