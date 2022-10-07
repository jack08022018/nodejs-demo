import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersEntity } from './repository/users.entity';

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
      createDate: current,
      expiredDate: new Date(current.getTime() + 3600000)
    };
  }
}
