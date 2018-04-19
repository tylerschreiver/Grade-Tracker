import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Course } from '../../../models/course.model';
import { GradeGroup } from '../../../models/grade-group.model';
import { Grade } from '../../../models/grade.model';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { GradeGroupComponent } from '../grade-group/grade-group.component';
import { DecimalPipe } from '@angular/common';
import { GradeScaleComponent } from '../../create-semester/grade-scale/grade-scale.component';
import { SSL_OP_NO_COMPRESSION } from 'constants';

@Component({
  selector: 'gt-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  isExpanded: Boolean = false;
  courseObj: Course;
  gradeGroups: any[] = [];
  old: any[] = [];
  cancel: boolean = false;
  groupEdit = false;
  edit: boolean = false;
  canConfirmNewGroups = false;
  allowButtons = true;
  weightChangeStarted = false;
  numNewGroups = 0;
  @ViewChild(GradeScaleComponent) scaleComp: GradeScaleComponent;
  @ViewChildren(GradeGroupComponent) components: QueryList<GradeGroupComponent>;
  @Output('save') save = new EventEmitter();
  @Output('courseEdit') courseEdit = new EventEmitter();
  @Output('deleteCourse') deleteCourse = new EventEmitter();
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
    this.numNewGroups++;
    this.cancel = true;
    let temp = this.gradeGroups;
    this.gradeGroups = [];
    this.gradeGroups.push({"grade": new GradeGroup({}), "edit":true, id: 0});
    let i = 1;
    temp.forEach((group) => {
      group.id = i;
      this.gradeGroups.push(group);
    });

    if (this.numNewGroups > 1) {
      setTimeout(() => {
        let i = 0;
        this.components.toArray().forEach((comp) => {
          i++;
          if (i == this.numNewGroups) comp.parentalPermission = true;
          else comp.parentalPermission = false;
        });
      },1)
    }
  }

  cancelNewGradeGroup() {
    this.cancel = false;
    this.gradeGroups = this.gradeGroups.slice(this.numNewGroups, this.gradeGroups.length);
    this.gradeGroups.forEach((group) => {
      group.id = group.id - 1;
    });
    this.numNewGroups = 0;
    this.components.toArray().forEach((comp) => {
      comp.stopWeightChange();
    });
    this.weightChangeStarted = false;
  }

  changeWeights() {
    setTimeout(() => {
      this.weightChangeStarted = true;
    },0)
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

  editGroup() {
    this.old = [];
    this.groupEdit = true;
    this.components.toArray().forEach((comp) => {
      this.old.push(comp.groupObj);
    });
  }

  cancelEdit() {
    let length = this.components.toArray().length;
    let comps = this.components.toArray();
    for (let i=0; i<length; i++) {
      comps[i].edit = false;
      comps[i].groupObj = this.old[i];
      comps[i].nameComplete = false;
    }
    this.groupEdit = false;
  }


  confirmNewGradeGroup() {
    this.numNewGroups = 0;
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
    this.weightChangeStarted = false;
    this.save.emit(this.courseObj);
  }

  deleteGroup(e) {
    if (confirm("Are you sure you want to delete " + e.name +  "?")) {
      this.cancel = true;
      let temp = [];
      this.gradeGroups.forEach((group) => {
        if (group.group.name != e.name || group.group.weight != e.weight) {
          temp.push(group);
        }
      });
      this.gradeGroups = temp;
      this.courseObj.gradeGroups = [];
      this.gradeGroups.forEach((group) => {
        this.courseObj.gradeGroups.push(group.group);
      });
      this.changeWeights();
    }
  }

  beginEdit() {
    this.isExpanded = false;
    this.edit = true;
    this.courseEdit.emit();
  }

  getScale() {
    return this.scaleComp.changeScale();
  }

  delete() {
    this.deleteCourse.emit();
  }

  receiveName() {
    let valid = true;
    this.components.toArray().forEach((comp) => {
      if (!comp.groupForm.controls['name'].valid) valid = false;
    });
    this.components.toArray()[this.numNewGroups-1].tempDisable = !valid;
  }
}
