import { Component, OnInit, Input, Output } from '@angular/core';
import { Semester } from '../../../models/semester.model';
import { RouterModule, Routes, Router } from '@angular/router';
import { EventEmitter } from 'events';
import { GradeReceiverService } from '../../../services/grade-receiver.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'gt-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {
  @Input() semester: Semester;
  @Output('navigate') navigate = new EventEmitter();
  constructor(public router: Router,
              public grade: GradeReceiverService,
              public auth: AuthService) { }


  ngOnInit() {
  }

  delete() {
    let sure = confirm("Are you sure you want to delete " + this.semester.session + " " + this.semester.year + "?");
    if (sure) {
      this.grade.deleteSemester(this.auth.uid, this.semester);
    }
  }

  navigateToSemesterDetail(id?) {
    this.router.navigate(['/' + this.auth.uid + '/semester/' + id]);
  }

}
