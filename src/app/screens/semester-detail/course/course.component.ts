import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Course } from '../../../models/course.model';
import { GradeGroup } from '../../../models/grade-group.model';
import { Grade } from '../../../models/grade.model';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { GradeGroupComponent } from '../grade-group/grade-group.component';

@Component({
  selector: 'gt-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  isExpanded: Boolean = false;
  courseObj: Course;
  gradeGroups: any[] = [];
  cancel: boolean = false;
  canConfirmNewGroups = false;
  @ViewChildren(GradeGroupComponent) components: QueryList<GradeGroupComponent>;
  @Output('save') save = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  
  @Input() set course(course: Course) {
    this.courseObj = course;
    let i = 0;
    course.gradeGroups.forEach((group) => {
      this.gradeGroups.push({"group": group, "edit":false, "id": i});
      i++;
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
    this.cancel = true;
    let temp = this.gradeGroups;
    this.gradeGroups = [];
    this.gradeGroups.push({"grade": new GradeGroup({}), "edit":true, id: 0});
    let i = 1;
    temp.forEach((group) => {
      group.id = i;
      this.gradeGroups.push(group);
    });
  }

  cancelNewGradeGroup() {
    this.cancel = false;
    this.gradeGroups = this.gradeGroups.slice(1, this.gradeGroups.length);
    this.gradeGroups.forEach((group) => {
      group.id = group.id - 1;
    });
    this.components.toArray().forEach((comp) => {
      comp.stopWeightChange();
    })
  }

  changeWeights() {
    this.components.toArray().forEach((comp) => {
      comp.startWeightChange();
    });
  }

  checkWeightTotals() {
    setTimeout(() => {
      let value = 0;
      let allValid = true;
      this.components.toArray().forEach((comp) => {
        if(!comp.groupForm.valid) allValid = false;
        else value += comp.groupForm.controls['weight'].value;
      });
      this.canConfirmNewGroups = (allValid && value === 100);
    });
  }

  confirmNewGradeGroup() {
    this.cancel = false;
    let i = 0;
    this.components.forEach((comp) => {
      comp.edit = false;
      comp.cancel = false;
      this.gradeGroups[i].grade = comp.addGradeGroup();
      i++;
    });
    this.courseObj.gradeGroups = [];
    this.gradeGroups.forEach((gradegroup) => {
      this.courseObj.gradeGroups.push(new GradeGroup(gradegroup.grade));
    });
    this.save.emit(this.courseObj);
  }
}
