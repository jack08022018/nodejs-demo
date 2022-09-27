import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('titles')
export class TitlesEntity {
    @PrimaryColumn()
    emp_no: number;

    @PrimaryColumn()
    title: String;

    @PrimaryColumn()
    from_date: Date;

    @PrimaryColumn()
    to_date: Date;

    @Column()
    trash: String;

}