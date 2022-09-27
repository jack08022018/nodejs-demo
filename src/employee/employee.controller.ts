import { Controller, Get, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { EmployeeService } from './employee.service';
import { CreateCatDto } from './dto/CreateCatDto';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService,
    ) {}

    @Get('/getEmployeeInfo')
    getEmployees(@Body() createCatDto: CreateCatDto) {
        return this.employeeService.getEmployeeInfo()
    }

    @Get('/updateEmployee')
    updateEmployee() {
        this.employeeService.updateEmployee()
    }
}
