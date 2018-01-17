import { Component, OnInit } from '@angular/core';
import { GradeReceiverService } from '../../services/grade-receiver.service';
import { Semester } from '../../models/semester.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gt-semester-detail',
  templateUrl: './semester-detail.component.html',
  styleUrls: ['./semester-detail.component.css']
})
export class SemesterDetailComponent {
  semester: Semester;
  id: any;

  constructor(public GradeReveiver: GradeReceiverService,
              public route: ActivatedRoute) {
                route.params.forEach((param) => this.id = param['id']);
                this.semester = GradeReveiver.getSemesterById(this.id);
  }

}
