import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'gt-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  isExpanded: Boolean = false;
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
