import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'gt-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.css']
})
export class CreateSemesterComponent implements OnInit {
  semesterForm: FormGroup;
  newCourseForm: FormGroup;
  yearsAvailable: number[] = [];
  creatingCourse: Boolean = false;
  isScaleDone: Boolean = false;

  constructor(formBuilder: FormBuilder) {
    this.semesterForm = formBuilder.group({
      year: ['', Validators.required],
      session: ['', Validators.required],
      courses: ['']
    });
    this.newCourseForm = formBuilder.group({
      name: ['', Validators.required],
      hours: ['', Validators.required],
      scaleType: ['', Validators.required],
      scale: ['', Validators.required]
    })
    for(let i = 2014; i < 2035; i++) { this.yearsAvailable.push(i); }
  }

  ngOnInit() {
  }


  newCourse() {
    this.creatingCourse = true;
  }

  scaleFinished(e) {
    console.log(e);
    this.isScaleDone = true;
  }

}
