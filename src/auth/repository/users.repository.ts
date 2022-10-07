import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../repository/users.entity'

@Injectable()
export class UsersRepository {
  private readonly users: UsersEntity[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'john',
        password: '$2b$10$A0SXp9KKjwxdbjn9dZfodeKKYf72K60WTHP7sXE2tOHO1y5viyOwq',
        roles: ['admin'],
      },
      {
        id: 2,
        username: 'chris',
        password: '$2b$10$L1u8KIVB4hFXxKO0qKNh1elX2f84gqIgOhzx9hpVCRozdiBZkEzxC',
        roles: ['user'],
      },
      {
        id: 3,
        username: 'maria',
        password: '$2b$10$3uOGzQcFFNsD6dJGc.IhlelVlar33wWwCgn/UymOS416e7ov5xfze',
        roles: ['user'],
      },
    ];
  }

  async findOne(username: string): Promise<UsersEntity | undefined> {
    return this.users.find(user => user.username === username);
  }
}
