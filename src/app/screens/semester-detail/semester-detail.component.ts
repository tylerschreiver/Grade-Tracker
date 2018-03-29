import { Component, OnInit } from '@angular/core';
import { GradeReceiverService } from '../../services/grade-receiver.service';
import { Semester } from '../../models/semester.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gt-semester-detail',
  templateUrl: './semester-detail.component.html',
  styleUrls: ['./semester-detail.component.scss']
})
export class SemesterDetailComponent {
  semester: Semester;
  id: any;
  errorMessage: string;

  constructor(public GradeReceiver: GradeReceiverService,
              public route: ActivatedRoute) {
    route.params.forEach((param) => this.id = param['id']);
    this.GradeReceiver.getSemesterById(this.id).subscribe(data => {
      this.semester = new Semester(data);
    }, error => this.errorMessage = <any> error);
  }

  saveCourse(e, originalCourse) {
    this.semester.courses.forEach((course) => {
      if(course == originalCourse) {
        course = e;
      }
    });
    this.GradeReceiver.updateSemester(this.semester)
  }
}
