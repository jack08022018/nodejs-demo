import { Controller, Get, Post, Req, Body, Res, 
    Response, StreamableFile, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { AuthService } from '../auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        // res.cookie('access_token', 'xxxaaa', {
        //     maxAge: 365 * 24 * 60 * 60 * 100,
        //     httpOnly: true,
        //     //secure: true;
        // })
        return this.authService.login(req.user);
    }

}
