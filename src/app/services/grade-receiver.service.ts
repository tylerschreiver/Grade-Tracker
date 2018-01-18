import { Injectable } from '@angular/core';
import { Semester } from '../models/semester.model';
import { Course } from '../models/course.model';
import { GradeGroup } from '../models/grade-group.model';
import { Grade } from '../models/grade.model';

@Injectable()
export class GradeReceiverService {

  constructor() { }

  mockSemesterData() {
    let grade1, grade2, grade3: Grade;
    grade1 = grade2 = grade3 = new Grade({
      name: "grade",
      totalPoints: 100,
      pointsEarned: 69
    });

    grade3 = new Grade({
      name: "grade",
      totalPoints: 100,
      pointsEarned: null
    });

    let grades = [grade1, grade2, grade3];

    let gradeGroup1, gradeGroup2, gradeGroup3, gradeGroup4: GradeGroup;
    gradeGroup1 = gradeGroup2 = gradeGroup3 = gradeGroup4 = new GradeGroup({
      name: "tests",
      weight: 25,
      numGrades: 3,
      grades: grades
    })

    let gradeGroups = [gradeGroup1, gradeGroup2, gradeGroup3, gradeGroup4];

    let course1, course2, course3: Course;
    course1 = course3 = new Course({
      name: "CECS 100",
      hours: 5,
      scaleType: 'letter',
      gradeScale: [60, 70, 80, 90],
      gradeGroups: gradeGroups
    });

    course2 = new Course({
      name: "CECS 110",
      hours: 5,
      scaleType: 'plus',
      gradeScale: [60, 67, 70, 77, 80, 87, 90, 97],
      gradeGroups: gradeGroups
    });

    course3 = new Course({
      name: "CECS 120",
      hours: 5,
      scaleType: 'plusMinus',
      gradeScale: [60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97],
      gradeGroups: gradeGroups
    });

    let courses = [course1, course2, course3];

    let mock = new Semester({
      year: 2017,
      session: "Fall",
      courses: courses,
      id: 1
    });

    return mock;
  }

  getSemesterById(id) {
    return this.mockSemesterData();
  }

}
