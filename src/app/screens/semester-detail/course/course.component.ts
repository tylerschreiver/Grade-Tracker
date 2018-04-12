import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/course.model';

@Component({
  selector: 'gt-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  isExpanded: Boolean = false;
  @Input() course: Course;
  @Output('save') save = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  saveGroup(e, groupOriginal) {
    this.course.gradeGroups.forEach((group) => {
      if (group == groupOriginal) {
        group = e;
      }
    });
    this.save.emit(this.course);
  }

}
