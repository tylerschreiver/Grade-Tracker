import { Component, OnInit } from '@angular/core';
import { GradeReceiverService } from '../../services/grade-receiver.service';
import { Semester } from '../../models/semester.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'gt-home-screen', // gt for GradeTracker
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {
  semesters: Semester[] = [];
  errorMessage:string;

  constructor(public GradeReceiver: GradeReceiverService,
              public auth: AuthService,
              public router: Router) { 
                this.auth.isLoggedIn();
               }

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
