import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('salaries')
export class SalariesEntity {
    @PrimaryColumn()
    emp_no: number;

    @Column()
    salary: number;

    @Column({ type: 'timestamp' })
    from_date: Date;

    @PrimaryColumn()
    // @Column({ type: 'timestamp' })
    to_date: Date;

}