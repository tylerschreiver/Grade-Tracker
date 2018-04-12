import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GradeGroup } from '../../../models/grade-group.model';
import { Grade } from '../../../models/grade.model';
import { GradeReceiverService } from '../../../services/grade-receiver.service';

@Component({
  selector: 'gt-grade-group',
  templateUrl: './grade-group.component.html',
  styleUrls: ['./grade-group.component.scss']
})

export class GradeGroupComponent implements OnInit {
  isExpanded: Boolean = false;
  gradeObjs = [];
  groupObj: GradeGroup;
  cancel: Boolean = false;
  @Output('save') save = new EventEmitter();
  constructor(public gradeReceiver: GradeReceiverService) { }

  @Input() set group(group: GradeGroup) {
    this.groupObj = group;
    group.grades.forEach((grade) => {
      this.gradeObjs.push({"grade": grade, "edit": false});
    })
  }
  

  ngOnInit() {
  }

  newGrade() {
    this.cancel = true;
    let temp = this.gradeObjs;
    this.gradeObjs = [];
    this.gradeObjs.push({"grade": null, "edit": true});
    temp.forEach((grade) => {
      this.gradeObjs.push(grade);
    });
  }

  saveNewGrade(e) {
    this.gradeObjs[0] = {grade: new Grade(e), edit: false};
    let grades = [];
    this.gradeObjs.forEach((grade) => {
      grades.push(grade.grade);
    });
    this.groupObj.updateGrades(grades);
    this.save.emit(this.groupObj);
  }

  cancelNewGrade() {
    this.cancel = false;
    this.gradeObjs = this.gradeObjs.slice(1,this.gradeObjs.length);
  }

}
