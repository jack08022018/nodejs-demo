import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UsersEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    roles?: string[];

    @Column()
    refresh_token?: string;

    @Column()
    refresh_expires_in?: string;
}