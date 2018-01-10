import { Component, OnInit, Input } from '@angular/core';
import { Semester } from 'app/models/semester.model';

@Component({
  selector: 'gt-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {

  constructor() { }
  @Input() semester: Semester;


  ngOnInit() {
  }

}
