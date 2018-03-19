import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'gt-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.css']
})
export class CreateGroupsComponent implements OnInit {
  gradeGroupForm: FormGroup;
  numGradeGroups: number;
  groups = [];
  canCreateGroups = false;
  finish = false;
  @Output('complete') complete = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  createGroups() {
    if (this.groups.length > this.numGradeGroups) {
      this.groups = this.groups.slice(0, this.numGradeGroups);
    }
    else {
      for (let i = this.groups.length; i < this.numGradeGroups; i++) {
        this.groups.push({id: i, weight: null, name: "", numGrades: null});
      }
    }

  }

  receiveEvent(e) {
    if (e == false) this.canCreateGroups = false;
    else {
      let total = 0;
      this.groups[e.id].weight = e.weight;
      this.groups[e.id].name = e.name;
      this.groups[e.id].numGrades = e.numGrades;
      this.groups.forEach((group) => {
        total += group.weight;
      });
      this.canCreateGroups = total == 100;
    }

  }

  finishGradeGroups() {
    this.finish = true;
    this.complete.emit(this.groups);
  }




}
