import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersEntity } from './repository/users.entity';
import ms from 'ms';
import { AuthConstants, getSecond } from './authConstants';
var randtoken = require('rand-token');

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOne(username);
    if (!user) {
        throw new NotAcceptableException('could not find the user');
    }
    const passwordValid = await bcrypt.compare(pass, user.password)
    if (!passwordValid) {
      throw new NotAcceptableException('password not match');
    }
    const { password, id, ...result } = user;
    return result;
  }

  async login(payload: UsersEntity) {
    const current = new Date();
    return {
      access_token: this.jwtService.sign(payload),
      expires_in: getSecond(AuthConstants.expiresIn),
      createDate: current,
      // refresh_token: await this.generateRefreshToken(payload),
      // refresh_expires_in: getSecond(AuthConstants.expiresIn),
    };
  }

  // async generateRefreshToken(payload: UsersEntity): Promise<string> {
  //   var refreshToken = randtoken.generate(16);
  //   var expirydate = new Date();
  //   expirydate.setDate(expirydate.getTime() + getSecond(AuthConstants.refreshExpiresIn));
  //   await this.usersRepository.saveorupdateRefreshToke(refreshToken, userId, expirydate);
  //   return refreshToken
  // }

}
