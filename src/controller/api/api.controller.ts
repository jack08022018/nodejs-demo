import { Controller, Get, Post, Req, Body, Res, Query,
    Response, StreamableFile, UseGuards, Request } from '@nestjs/common';
import { join } from 'path';
import { createReadStream } from 'fs';
import { ApiService } from './api.service';
import { CreateCatDto } from './dto/CreateCatDto';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { lastValueFrom, map } from 'rxjs';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../../auth/guards/local-auth.guard';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class ApiController {
    constructor(
        private readonly apiService: ApiService,
        private readonly httpService: HttpService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get('/profile')
    async getProfile(@Request() req) {
        return req.user;
    }

    @Get('/genPassword')
    async genPassword(@Query('password') password: string) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        return hashedPassword
        // return req.user;
    }

    @Get('/getEmployeeInfo')
    getEmployees(@Body() createCatDto: CreateCatDto) {
        // let data = [
        //     {id: 1, name: 'a 1', age: 15},
        //     {id: 2, name: 'a 2', age: 24},
        //     {id: 3, name: 'a 3', age: 7},
        //     {id: 4, name: 'a 4', age: 38},
        // ]
        // return data.filter(s => s.age > 10)
        //     .map(s => s.id)
        //     .join(', ');
        return this.apiService.getEmployeeInfo()
    }

    @Get('/updateEmployee')
    async updateEmployee() {
        await this.apiService.updateEmployee()
    }

    @Get('/file')
    getFile(@Response({ passthrough: true }) res): StreamableFile {
        const file = createReadStream(join(process.cwd(), 'package.json'));
        res.set({
            'Content-Type': 'application/json',
            'Content-Disposition': 'attachment; filename="package.json"',
        });
        return new StreamableFile(file);
    }

    @Get('/getHttp')
    async getHttp() {
        const url = 'http://localhost:9090/demo/api/getProductData'
        const requestConfig: AxiosRequestConfig = {
            // headers: {
            //   'Content-Type': 'application/json', accept: '*/*',
            // },
            // params: {
            //   name: 'YOUR_VALUE_HERE'
            // },
        };
        const params = {
            name: 'YOUR_VALUE_HERE'
        }
          
        const responseData = await lastValueFrom(
            this.httpService.post(url, params, requestConfig).pipe(
                map((response) => {
                    return response.data;
                }),
            ),
        );
        return responseData
    }
    
}
