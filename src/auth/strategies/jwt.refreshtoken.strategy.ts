import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {Injectable, UnauthorizedException, Body} from '@nestjs/common';
import { UsersRepository } from '../repository/users.repository';
import { AuthConstants } from '../authConstants';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, "jwt-refreshtoken") {
  constructor(private usersRepository: UsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: AuthConstants.secret,
      passReqToCallback: true
    });
  }

  async validate(req, payload: any) {
    var user = await this.usersRepository.findOne(payload.username);
    if(!user) {
        throw new UnauthorizedException();
    }
    if(req.body.refreshToken != (await user).refresh_token) {
        throw new UnauthorizedException();
    }
    if(new Date() > new Date((await user).refresh_expires_in)) {
        throw new UnauthorizedException();
    }
    return { userId: payload.sub, username: payload.username };
  }
}
