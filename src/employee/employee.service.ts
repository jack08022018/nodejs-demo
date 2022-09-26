import { Injectable } from '@nestjs/common';
import { SalaryService } from '../orm/salary/salary.service';

@Injectable()
export class EmployeeService {
    constructor(private readonly salaryService: SalaryService) {}

    getEmployeeInfo() {
        return {
            salary: this.salaryService.findAll()
        };
    }
}
