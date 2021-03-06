import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GradeGroup } from '../../../models/grade-group.model';
import { Grade } from '../../../models/grade.model';
import { GradeReceiverService } from '../../../services/grade-receiver.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  groupForm: FormGroup;
  nameComplete: boolean = false;
  oldValue: number;
  parentalPermission = true;
  tempDisable = false;
  @Input() edit: boolean = false;
  @Output('save') save = new EventEmitter();
  @Output('weight') weight = new EventEmitter();
  @Output('change') change = new EventEmitter();
  @Output('deleteGroup') deleteGroup = new EventEmitter();
  @Output('editGroup') editGroup = new EventEmitter();
  @Output('name') name = new EventEmitter();

  constructor(public gradeReceiver: GradeReceiverService,
              public fb: FormBuilder) { 
                this.groupForm = fb.group({
                  name: ['', Validators.required],
                  weight: [0, Validators.min(1)]
                });
              }

  @Input() set group(group: GradeGroup) {
    if (group) {
      this.groupObj = group;
      this.groupForm.controls['name'].setValue(group.name);
      this.groupForm.controls['weight'].setValue(group.weight);
      group.grades.forEach((grade) => {
        this.gradeObjs.push({"grade": grade, "edit": false});
      });
    }
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

  addGradeGroup() {
    let oldGrades = [];
    if (this.groupObj && this.groupObj.grades) oldGrades = this.groupObj.grades;
    this.groupObj = new GradeGroup(this.groupForm.value);
    this.groupObj.grades = oldGrades;
    this.edit = false;
    return this.groupObj;
  }

  adjustWeights() {
    this.nameComplete = true;
    this.weight.emit();
  }

  startWeightChange() {
    if (this.groupObj) this.oldValue = this.groupObj.weight;
    this.nameComplete = true;
    this.edit = true;
  }

  stopWeightChange() {
    this.groupForm.controls['weight'].setValue(this.oldValue);
    if(this.groupObj) this.groupObj.weight = this.oldValue;
    this.nameComplete = false;
    this.edit = false;
  }

  deleteGrade(e) {
    let tempGrades = [];
    let i = 0;
    this.groupObj.grades.forEach((grade) => {
      if (grade.name !== e.grade.name || grade.pointsEarned !== e.grade.pointsEarned
          || grade.totalPoints !== e.grade.totalPoints) tempGrades.push(grade);
      else this.gradeObjs.splice(i,1);
      i++;
    });
    this.groupObj.grades = tempGrades;
    this.save.emit(this.groupObj);
  }

  deleteGradeGroup() {
    this.deleteGroup.emit(this.groupObj);
  }

  editMode() {
    this.edit = true;
    this.groupForm.controls['name'].setValue(this.groupObj.name);
    this.groupForm.controls['weight'].setValue(this.groupObj.weight);
    this.editGroup.emit();
  }

  giveParentName() {
    if (!this.parentalPermission) {

    }
  }

}
