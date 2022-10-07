import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConstants } from '../authConstants';

@Injectable()
export class JwtBearerStrategy extends PassportStrategy(Strategy, 'jwt.bearer') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: AuthConstants.secret,
    });
  }

  async validate(payload: any) {
    return { username: payload.username, roles: payload.roles };
  }
}
