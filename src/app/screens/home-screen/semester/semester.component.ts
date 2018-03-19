import { Component, OnInit, Input } from '@angular/core';
import { Semester } from '../../../models/semester.model';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'gt-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {
  @Input() semester: Semester;

  constructor() { }


  ngOnInit() {
  }

}
