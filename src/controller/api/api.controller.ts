import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateCatDto } from './dto/CreateCatDto';

@Controller('api')
export class ApiController {
    constructor(
        private readonly apiService: ApiService,
    ) {}

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
    
}
