import { Component, OnInit } from '@angular/core';
import { GradeReceiverService } from 'app/services/grade-receiver.service';
import { Semester } from 'app/models/semester.model';

@Component({
  selector: 'gt-home-screen', // gt for GradeTracker
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  semesters: Semester[] = [];
  constructor(public GradeReceiver: GradeReceiverService) {
    for(let i=0; i<6; i++) this.semesters.push(GradeReceiver.mockSemesterData());  
    // real service function will return whole array of semesters
  }

  ngOnInit() {
  }

}
