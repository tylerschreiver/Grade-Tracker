import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'gt-create-grade-group',
  templateUrl: './create-grade-group.component.html',
  styleUrls: ['./create-grade-group.component.css']
})
export class CreateGradeGroupComponent implements OnInit {
  gradeGroupForm: FormGroup;
  numGradeGroups: number;
  groups = [];
  constructor(public fb: FormBuilder) {
    this.gradeGroupForm = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      numGrades: ['']
    });
  }

  ngOnInit() {
  }

  createGroups() {
    if (this.groups.length > this.numGradeGroups) {
      this.groups = this.groups.slice(0, this.numGradeGroups);
    }
    else {
      let groupsToAdd = this.numGradeGroups - this.groups.length
      for (let i = 0; i < groupsToAdd; i++) {
        this.groups.push(this.gradeGroupForm);
      }
    }

  }


}
