import { Component, OnInit } from '@angular/core';
import { GradeReceiverService } from '../../services/grade-receiver.service';
import { Semester } from '../../models/semester.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'gt-semester-detail',
  templateUrl: './semester-detail.component.html',
  styleUrls: ['./semester-detail.component.scss']
})
export class SemesterDetailComponent {
  semester: Semester;
  id: any;
  uid: string;
  errorMessage: string;

  constructor(public GradeReceiver: GradeReceiverService,
              public route: ActivatedRoute,
              private auth: AuthService) {
    route.params.forEach((param) => {
      this.id = param['id']
      this.uid = param['uid'];
    });

    this.GradeReceiver.getSemesterById(this.uid,this.id).subscribe((data:any) => {
      if (data) this.semester = new Semester(data);
    }, error => this.errorMessage = <any> error);
  }

  saveCourse(e, originalCourse) {
    this.semester.courses.forEach((course) => {
      if(course == originalCourse) {
        course = e;
      }
    });
    this.saveSemester();
  }

  saveSemester() {
    this.GradeReceiver.updateSemester(this.uid, this.semester);
    document.getElementsByClassName('changes-saved')[0].classList.add('block');
    setTimeout(() => {
      document.getElementsByClassName('changes-saved')[0].classList.remove('block');
    },3000);
  }
}
