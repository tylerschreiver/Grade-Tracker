import { Injectable } from '@angular/core';
import { Semester } from '../models/semester.model';
import { Course } from '../models/course.model';
import { GradeGroup } from '../models/grade-group.model';
import { Grade } from '../models/grade.model';
import { sampleJson } from '../../../sample semester';

@Injectable()
export class GradeReceiverService {

  constructor() {
    console.log(this.createSemesterObject(sampleJson))
  }

  createSemesterObject(semester: Semester) {
    let courses = [];
    semester.courses.forEach((course) => {
      let groups = [];
      course.gradeGroups.forEach((group) => {
        let grades = [];
        group.grades.forEach((grade) => {
          grade = new Grade(grade);
          grades.push(grade);
        }); // end grades loop;
        group.grades = grades;
        group = new GradeGroup(group);
        groups.push(group);
      }); // end GradeGroup loop
      course.gradeGroups = groups;
      course = new Course(course);
      courses.push(course);
    }); // end Courses loop
    semester.courses = courses;
    let newSemester = new Semester(semester);
    return newSemester;
  }

  mockSemesterData() {
    let grade1, grade2, grade3: Grade;
    grade1 = grade2 = grade3 = new Grade({
      name: 'grade',
      totalPoints: 100,
      pointsEarned: 73
    });

    grade3 = new Grade({
      name: 'grade',
      totalPoints: 100,
      pointsEarned: null
    });

    let grades = [grade1, grade2, grade3];

    let gradeGroup1, gradeGroup2, gradeGroup3, gradeGroup4: GradeGroup;
    gradeGroup1 = new GradeGroup({
      name: 'tests',
      weight: 25,
      numGrades: 3,
      grades: grades
    });

    gradeGroup2 = new GradeGroup({
      name: 'projects',
      weight: 25,
      numGrades: 3,
      grades: grades
    });

    gradeGroup3 = new GradeGroup({
      name: 'homework',
      weight: 25,
      numGrades: 3,
      grades: grades
    });

    gradeGroup4 = new GradeGroup({
      name: 'quizzes',
      weight: 25,
      numGrades: 3,
      grades: grades
    })

    let gradeGroups = [gradeGroup1, gradeGroup2, gradeGroup3, gradeGroup4];

    let course1, course2, course3: Course;
    course1 = course3 = new Course({
      name: 'CECS 100',
      hours: 5,
      scaleType: 'letter',
      gradeScale: [60, 70, 80, 90],
      gradeGroups: gradeGroups
    });

    course2 = new Course({
      name: 'CECS 110',
      hours: 5,
      scaleType: 'plus',
      gradeScale: [60, 67, 70, 77, 80, 87, 90, 97],
      gradeGroups: gradeGroups
    });

    course3 = new Course({
      name: 'CECS 120',
      hours: 5,
      scaleType: 'plusMinus',
      gradeScale: [60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93, 97],
      gradeGroups: gradeGroups
    });

    let courses = [course1, course2, course3];

    let mock = new Semester({
      year: 2017,
      session: 'Fall',
      courses: courses,
      id: 1
    });

    return mock;
  }

  getSemesterById(id) {
    return this.mockSemesterData();
  }

}
