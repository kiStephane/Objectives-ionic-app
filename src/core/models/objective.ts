import { Column, DbHelperModel, PrimaryKey, Table } from 'ng-db-helper';

export enum ObjectiveType {
    Sport,
    Family,
    Spiritual
}

@Table({name: 'objectives', version: 1})
export class Objective extends DbHelperModel{

    @PrimaryKey({autoIncrement: true})
    public id: number

    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column({type: 'string'})
    public type: ObjectiveType;
}