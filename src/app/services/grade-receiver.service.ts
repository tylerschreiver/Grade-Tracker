import { Injectable } from '@angular/core';
import { Semester } from '../models/semester.model';
import { Course } from '../models/course.model';
import { GradeGroup } from '../models/grade-group.model';
import { Grade } from '../models/grade.model';
import { sampleJson } from '../../../sample semester';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class GradeReceiverService {
  semesters: any = {};
  semestersObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
  }

  getSemesters(uid): Observable<any[]> {
    this.semesters = this.db.list('/' + uid + '/semesters');
    return this.semesters.valueChanges();
  }

  getSemesterById(uid, id) {
    return this.db.object('/' + uid + '/semesters/'+ id ).valueChanges();
  }

  saveNewSemester(uid,semester,id) {
    semester.id = id;
    this.db.object('/' + uid + '/semesters/'+id).set(semester);
  }

  deleteSemester(uid, semester) {
    this.db.object('/' + uid + '/semesters/'+semester.id).remove();
  }

  updateSemester(uid, semester) {
    this.db.object('/' + uid + '/semesters/'+semester.id).update(semester);
  }


}


