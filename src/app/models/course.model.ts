import { GradeGroup } from './grade-group.model';
enum scaleType  {'letter', 'plusMinus', 'plus'};

export class Course {
    name: string;
    hours: number;
    scaleType: scaleType; // letter: 4, plus: 8, plusMinus: 12
    gradeScale: number[]; 
    gradeGroups: GradeGroup[] = [];
    letters = {
        "letter": ['F', 'D', 'C', 'B', 'A'],
        "plusMinus": ['F', 'D-', 'D', 'D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A', 'A+'],
        "plus": ['F', 'D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+']        
    }
    numbers = {
        "letter": [0,1,2,3,4],
        "plusMinus": [0,.7,1,1.3,1.7,2,2.3,2.7,3,3.3,3.7,4,4],
        "plus": [0,1,1.3,2,2.3,3,3.3,4,4]
    }

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
            if (group.grades.length > 0)
            totalPossible += group.weight;
        });
        return totalPoints/totalPossible;
    }

    letterGrade() {
        let classGrade = this.averageInCourse() * 100;
        let index = 0;
        let indexFound = false;
        this.gradeScale.forEach((grade) => {
            if (grade >= classGrade && !indexFound) {
                index = this.gradeScale.indexOf(grade);
                indexFound = true;
            }
        });
        if(!indexFound) {
            if (classGrade == 100 || classGrade > this.gradeScale[this.gradeScale.length]) {
                index = this.gradeScale.length
            }
        }
        return this.letters[this.scaleType][index];
    }

    numberGrades() {
        let classGrade = this.averageInCourse() * 100;
        let index = 0;
        let indexFound = false;
        this.gradeScale.forEach((grade) => {
            if (grade >= classGrade && !indexFound) {
                index = this.gradeScale.indexOf(grade);
                indexFound = true;
            }
        });
        if(!indexFound) {
            if (classGrade == 100 || classGrade > this.gradeScale[this.gradeScale.length]) {
                index = this.gradeScale.length
            }
        }
        return this.numbers[this.scaleType][index];
    }
}