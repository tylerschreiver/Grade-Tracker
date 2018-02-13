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
      this.semester = data;
    }, error => this.errorMessage = <any> error);
  }

  // ngOnInit() {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
    
  // }
}