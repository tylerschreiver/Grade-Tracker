import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'gt-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent implements OnInit {
  @Input() course: Course;
  minimized = true;
  constructor() { }

  ngOnInit() {
  }

}
