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
  nextId = 0;
  semestersObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.getSemesters().subscribe((data) => {
      this.nextId = data.length;
    })
  }

  getSemesters(): Observable<any[]> {
    this.semesters = this.db.list('/semesters');
    return this.semesters.valueChanges();
  }

  getSemesterById(id) {
    return this.db.object('/semesters/'+ id ).valueChanges();
  }

  saveNewSemester(semester) {
    semester.id = this.nextId;
    this.db.object('/semesters/'+this.nextId).set(semester);
  }

  deleteSemester(semester) {
    this.db.object('semesters/'+semester.id).remove();
  }

  updateSemester(semester) {
    this.db.object('semesters/'+semester.id).update(semester);
  }


}


