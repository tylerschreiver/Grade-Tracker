import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/course.model';
import { GradeGroup } from '../../../models/grade-group.model';

@Component({
  selector: 'gt-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  isExpanded: Boolean = false;
  courseObj: Course;
  gradeGroups: any[] = [];
  @Output('save') save = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  
  @Input() set course(course: Course) {
    this.courseObj = course;
    course.gradeGroups.forEach((group) => {
      this.gradeGroups.push({"group": group, "edit":false});
    });
  }

  saveGroup(e, groupOriginal) {
    this.courseObj.gradeGroups.forEach((group) => {
      if (group == groupOriginal) {
        group = e;
      }
    });
    this.save.emit(this.courseObj);
  }

  newGradeGroup() {
    let temp = this.gradeGroups;
    this.gradeGroups = [];
    this.gradeGroups.push({"grade": null, "edit":false});
    temp.forEach((group) => {
      this.gradeGroups.push(group);
    });
  }

}
