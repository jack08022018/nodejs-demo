import { Controller, Get, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { EmployeeService } from './employee.service';
import { CreateCatDto } from './dto/CreateCatDto';
import { SalaryService } from '../salary/salary.service';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly employeeService: EmployeeService,
        private readonly salaryService: SalaryService
    ) {}

    @Get('/getEmployees')
    getEmployees(@Body() createCatDto: CreateCatDto) {
        // return this.employeeService.getEmployeeInfo()
        return this.salaryService.findByEmpNo()
    }
}
