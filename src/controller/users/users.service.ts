import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers() {
        return [
            {id: 1, name: 'user 1'},
            {id: 2, name: 'user 2'}
        ];
    }
}
