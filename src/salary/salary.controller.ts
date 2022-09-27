import { Controller, Get, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { SalaryService } from './salary.service';
import { CreateCatDto } from './dto/CreateCatDto';

@Controller('salary')
export class SalaryController {
    constructor(private readonly salaryService: SalaryService) {}

    @Get('/getAll')
    getEmployees() {
        return this.salaryService.findByEmpNo();
    }
}
