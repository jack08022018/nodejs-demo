import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SalariesEntity {
    @Column('emp_no')
    @PrimaryGeneratedColumn()
    empNo: number;

    @Column()
    salary: number;

    @Column({ type: 'timestamptz' })
    from_date: Date;

    @Column({ type: 'timestamptz' })
    to_date: Date;

}