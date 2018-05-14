import { Grade } from './grade.model';

export class GradeGroup {
    name: string;
    weight: number;
    numGrades: number;
    grades: Grade[] = [];

    constructor(json: any) {
  		if (json.name) this.name = json.name;
  		if (json.weight) this.weight = json.weight;
    	if (json.numGrades) this.numGrades = json.numGrades;
        if (json.numGrades && (!json.grades || !json.grades.length)) {
          for (let i = 0; i < json.numGrades; i++) {
              this.grades.push(new Grade({name: json.name, totalPoints: 100}));
          }
        } 
      if (json.grades) {
          json.grades.forEach((grade) => {
              this.grades.push(new Grade(grade));
          });
      }
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
            return (totalPointsEarned/totalPointsPossible);
        }
    }

    pointsTowardsTotal() {
        let avg = this.average();
        if (avg === null) return null;
        else return avg * this.weight;
    }

    updateGrades(grades) {
        this.grades = grades;
        this.numGrades = this.grades.length;
    }
}
