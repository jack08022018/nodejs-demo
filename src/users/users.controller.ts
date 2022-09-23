import { Controller, Get, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/getUsers')
    getUsers(@Req() request: Request) {
        console.log(request.body)
        return this.usersService.getUsers();
    }

    // @Get('/getUsers')
    // // @Redirect('https://nestjs.com', 301)
    // getUsers(@Req() request: Request): Observable<any[]> {
    //     console.log(request.body)
    //     let data = this.usersService.getUsers();
    //     return of(data)
    //     // return of(this.usersService.getUsers());
    // }

}
