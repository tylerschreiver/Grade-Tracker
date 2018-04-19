import { GradeGroup } from './grade-group.model';
enum scaleType  {'letter', 'plusMinus', 'plus'};

export class Course {
    name: string;
    hours: number;
    scaleType: scaleType; // letter: 4, plus: 8, plusMinus: 12
    gradeScale: number[]; 
    gradeGroups: GradeGroup[] = [];

    constructor(json: any) {
        if (json.name) this.name = json.name;
        if (json.hours) this.hours = json.hours;
        if (json.scaleType) this.scaleType = json.scaleType;
        if (json.gradeScale) this.gradeScale = json.gradeScale;
        if (json.gradeGroups) {
            json.gradeGroups.forEach((group) => {
                this.gradeGroups.push(new GradeGroup(group));
            })
        }
    }

    averageInCourse() {
        let totalPoints = 0;
        let totalPossible = 0;
        this.gradeGroups.forEach((group: GradeGroup) => {
            totalPoints += group.pointsTowardsTotal();
            if (group.numGrades > 0)
            totalPossible += group.weight;
        });
        return totalPoints/totalPossible;
    }
}