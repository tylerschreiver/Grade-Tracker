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
  semestersObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {  }

  getSemesters(): Observable<any[]> {
    return this.db.list('/semesters').valueChanges();
  }

  getSemesterById(id): Observable<any> {
    return this.db.object('/semesters/'+ id ).valueChanges();
  }

}


