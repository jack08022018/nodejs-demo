import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { Gender } from './enum/Gender.enum';

@Entity('employees')
export class EmployeesEntity {
    @PrimaryColumn()
    emp_no: number;

    @Column({ type: 'timestamp' })
    birth_date: Date;

    @Column()
    first_name: String;

    @Column()
    last_name: String;

    @Column({
        type: "enum",
        enum: Gender,
        enumName: 'gender',
        default: Gender.Male
    })
    gender: Gender;

    @Column()
    hire_date: Date;

}