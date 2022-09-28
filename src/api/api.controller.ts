import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { ApiService } from './api.service';
import { CreateCatDto } from './dto/CreateCatDto';

@Controller('api')
export class ApiController {
    constructor(
        private readonly apiService: ApiService,
    ) {}

    @Get('/getEmployeeInfo')
    getEmployees(@Body() createCatDto: CreateCatDto) {
        return this.apiService.getEmployeeInfo()
    }

    @Get('/updateEmployee')
    async updateEmployee() {
        await this.apiService.updateEmployee()
    }
}
