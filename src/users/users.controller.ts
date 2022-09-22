import { Controller, Get, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/getUsers')
    // @Redirect('https://nestjs.com', 301)
    getUsers(@Req() request: Request) {
        console.log(request.body)
        return this.usersService.getUsers();
    }
}
