import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grade } from '../../../models/grade.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gt-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  @Input() grade: Grade;
  @Input() edit: any;
  @Output('deleter') deleter = new EventEmitter();
  @Output('newGrade') newGrade = new EventEmitter();
  gradeForm: FormGroup;
  constructor(public fb: FormBuilder) { 
    this.gradeForm = fb.group({
      name: ['', Validators.required],
      pointsEarned: [''],
      totalPoints: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  addGrade() {
    this.grade = this.gradeForm.value;
    this.edit = false;
    this.newGrade.emit(this.gradeForm.value);
  }

  deleteGrade() {
    let confirmed = confirm("Are you sure you want to delete this grade?");
    if (confirmed) {
      this.deleter.emit(this);
    }
  }

  editMode() {
    this.edit = true;
    this.gradeForm.controls['name'].setValue(this.grade.name);
    this.gradeForm.controls['pointsEarned'].setValue(this.grade.pointsEarned);
    this.gradeForm.controls['totalPoints'].setValue(this.grade.totalPoints);
  }
}
