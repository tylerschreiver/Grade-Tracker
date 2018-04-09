import { Component, OnInit } from '@angular/core';
import { GradeReceiverService } from '../../services/grade-receiver.service';
import { Semester } from '../../models/semester.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  semesters: Semester[] = [];
  errorMessage:string;

  constructor(public GradeReceiver: GradeReceiverService,
              public router: Router) {  }

  ngOnInit() {
    this.getSemesters();
  }

  getSemesters(): void {
    this.semesters = [];
    this.GradeReceiver.getSemesters().subscribe(data => {
      this.updateSemesters(data);
    }, error => this.errorMessage = <any> error);
  }

  navigateToCreateSemester() {
    this.router.navigate(['/semester-create']);
  }

  updateSemesters(data) {
    this.semesters = [];
    data.forEach((semester) => {
      this.semesters.push(new Semester(semester));
    });
  }

}

