import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersRepository } from './repository/users.repository';
import { AuthService } from './auth.service';
import { HitService } from './repository/hit.service';
import { AuthConstants } from './authConstants';
import { JwtBearerStrategy } from './strategies/jwt-bearer.strategy';
import { JwtQueryStrategy } from './strategies/jwt-query.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RateStrategy } from './strategies/rate.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: AuthConstants.secret,
      signOptions: { expiresIn: AuthConstants.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    HitService,
    UsersRepository, 
    LocalStrategy, 
    JwtBearerStrategy, 
    JwtQueryStrategy,
    RateStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
