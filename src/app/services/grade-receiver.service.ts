import { Injectable } from '@angular/core';
import { Semester } from '../models/semester.model';
import { Course } from '../models/course.model';
import { GradeGroup } from '../models/grade-group.model';
import { Grade } from '../models/grade.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { sampleJson } from '../../../sample semester';

@Injectable()
export class GradeReceiverService implements OnInit{
  semesters: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.semesters = this.getSemesters('/semesters');
    console.log(this.semesters)
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

  getSemesterById(id) {
    return this.semesters[id];
  }

  getSemesters(path): Observable<any[]> {
    return this.db.list<Semester>(path).valueChanges();
  }

}
