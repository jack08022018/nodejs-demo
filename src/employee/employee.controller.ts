import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get('/demo')
    getUsers(@Req() request: Request) {
        return 'asc';
    }
}
