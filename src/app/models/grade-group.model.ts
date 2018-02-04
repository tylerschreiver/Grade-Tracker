import { Grade } from './grade.model';

export class GradeGroup {
    name: string;
    weight: number;
    numGrades: number;
    grades: Grade[];

    constructor(json: any) {
  		if (json.name) this.name = json.name;
  		if (json.weight) this.weight = json.weight;
    	if (json.numGrades) this.numGrades = json.numGrades;
        if (json.grades) this.grades = json.grades;
    }

    average() {
        let completed = this.grades.filter(grade =>  grade.pointsEarned && grade.pointsEarned !== null );
        if (completed.length === 0) return null;
        else {
            let totalPointsEarned = 0;
            let totalPointsPossible = 0;
            completed.forEach((grade) => {
                totalPointsEarned += grade.pointsEarned;
                totalPointsPossible += grade.totalPoints;
            });
            console.log("average function\n");
            console.log(totalPointsEarned/totalPointsPossible);
            return (totalPointsEarned/totalPointsPossible);
        }

    }

    pointsTowardsTotal() {
        let avg = this.average();
        if (avg === null) return null;
        else return avg * this.weight;
    }
}