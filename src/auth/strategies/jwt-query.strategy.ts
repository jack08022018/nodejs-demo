import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConstants } from '../authConstants';

@Injectable()
export class JwtQueryStrategy extends PassportStrategy(Strategy, 'jwt.query') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
      ignoreExpiration: false,
      secretOrKey: AuthConstants.secret,
    });
  }

  async validate(payload: any) {
    return { username: payload.username, roles: payload.roles };
  }
}
