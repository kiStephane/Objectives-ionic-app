export enum ObjectiveType {
    Sport,
    Family,
    Spiritual
}

export class Objective {
    public title: string;
    public description: string;
    public type: ObjectiveType;

    constructor() {}
}