import { Grade } from './grade.model';

export class GradeGroup {
    name: string;
    percentage: number;
    numGrades: number;
    grades: Grade[];

    constructor(json: any) {
  		if (json.name) this.name = json.name;
  		if (json.percentage) this.percentage = json.percentage;
    	if (json.numGrades) this.numGrades = json.numGrades;
  		if (json.grades) this.grades = json.grades;
    }
}