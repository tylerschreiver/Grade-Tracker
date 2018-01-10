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

    let grades = [grade1, grade2, grade3];

    let gradeGroup1, gradeGroup2, gradeGroup3, gradeGroup4: GradeGroup;
    gradeGroup1 = gradeGroup2 = gradeGroup3 = gradeGroup4 = new GradeGroup({
      name: "tests",
      percentage: 25,
      numGrades: 3,
      grades: grades
    })

    let gradeGroups = [gradeGroup1, gradeGroup2, gradeGroup3, gradeGroup4];

    let course1, course2, course3: Course;
    course1 = course2 = course3 = new Course({
      name: "CECS 100",
      hours: 5,
      includePlusMinus: false,
      //gradeScale:
      gradeGroups: gradeGroups
    });

    let courses = [course1, course2, course3];

    let mock = new Semester({
      year: 2017,
      session: "fall",
      courses: courses
    });

    return mock;
  }

}
