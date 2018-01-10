import { GradeGroup } from './grade-group.model';

export class Course {
    name: string;
    hours: number;
    includePlusMinus: boolean;
    gradeScale: any; // TODO: find elegant grade scale, maybe a model for it?
    gradeGroups: GradeGroup[];

    constructor(json: any) {
        if (json.name) this.name = json.name;
        if (json.hours) this.hours = json.hours;
        if (json.includePlusMinus) this.includePlusMinus = json.includePlusMinus;
        if (json.gradeScale) this.gradeScale = json.gradeScale;
        if (json.gradeGroups) this.gradeGroups = json.gradeGroups;
    }
}