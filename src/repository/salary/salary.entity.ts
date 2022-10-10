import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('salaries')
export class SalariesEntity {
    @PrimaryColumn()
    emp_no?: number;

    @Column()
    salary?: number;

    @PrimaryColumn()
    // @Column({ type: 'timestamp' })
    from_date?: Date;

    @Column()
    to_date?: Date;

}