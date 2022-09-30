import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('datasource.host'),
        port: configService.get('datasource.port'),
        username: configService.get('datasource.username'),
        password: configService.get('datasource.password').toString(),
        database: configService.get('datasource.database'),
        autoLoadEntities: true,
        synchronize: false,//alway false
        logging: true,
        keepConnectionAlive: true,
        retryAttempts: 2,
        retryDelay: 1000,
      }),
    }),
  ],
  exports: [DatabaseModule],
})
export class DatabaseModule {}