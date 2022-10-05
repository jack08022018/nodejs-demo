import { Controller, Get, Redirect, Req, UseFilters, ForbiddenException,
        UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/getUsers')
    @UseGuards(JwtAuthGuard)
    getUsers(@Req() request: Request) {
        // throw new ForbiddenException('asdas')
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
