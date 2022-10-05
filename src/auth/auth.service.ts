import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) {
        throw new NotAcceptableException('could not find the user');
    }
    const passwordValid = await bcrypt.compare(pass, user.password)
    if (!passwordValid) {
      throw new NotAcceptableException('password not match');
    }
    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const current = new Date();
    return {
      access_token: this.jwtService.sign(payload),
      createDate: current,
      expiredDate: new Date(current.getTime() + 60000)
    };
  }
}
