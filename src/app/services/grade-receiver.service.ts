import { Injectable } from '@angular/core';
import { Semester } from '../models/semester.model';
import { Course } from '../models/course.model';
import { GradeGroup } from '../models/grade-group.model';
import { Grade } from '../models/grade.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { sampleJson } from '../../../sample semester';
import { Session } from 'selenium-webdriver';

@Injectable()
export class GradeReceiverService implements OnInit{
  semesters: Observable<any>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.semesters = this.getSemesters('/semesters');
  }

  getSemesterById(id) {
    return this.semesters[id];
  }

  getSemesters(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

}
