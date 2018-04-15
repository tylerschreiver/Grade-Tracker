import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(public GradeReceiver: GradeReceiverService,
              public auth: AuthService,
              public router: Router,
              public change: ChangeDetectorRef) {  
                auth.getUserDetails().subscribe((detail) => {
                  this.getSemesters(detail.uid)
                });
              }

  ngOnInit() {
    // this.getSemesters();
  }

  getSemesters(id) {
    this.semesters = [];
    this.GradeReceiver.getSemesters(id).subscribe(data => {
      this.updateSemesters(data);
    }, error => console.log(error));
  }

  navigateToCreateSemester() {
    this.router.navigate(['/semester-create']);
  }

  updateSemesters(data) {
    this.semesters = [];
    data.forEach((semester) => {
      setTimeout(() => {
        this.semesters.push(new Semester(semester));
      },1)
    });
  }

}
