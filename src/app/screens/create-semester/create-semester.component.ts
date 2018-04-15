import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../models/course.model';
import { GradeScaleComponent } from './grade-scale/grade-scale.component';
import { GradeReceiverService } from '../../services/grade-receiver.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'gt-create-semester',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.scss']
})
export class CreateSemesterComponent implements OnInit {
  semesterForm: FormGroup;
  newCourseForm: FormGroup;
  yearsAvailable: number[] = [];
  creatingCourse: Boolean = false;
  isScaleDone: Boolean = false;
  areGroupsDone: Boolean = false;
  courseObject: Course;
  isSaving = false;
  nextId: any;
  uid: string;

  @ViewChild(GradeScaleComponent) scale: GradeScaleComponent;

  constructor(formBuilder: FormBuilder,
              auth: AuthService,
              public grade: GradeReceiverService,
              public router: Router) {
    auth.getUserDetails().subscribe((detail) => {
      this.uid = detail.uid;
    });
    this.semesterForm = formBuilder.group({
      year: ['', Validators.required],
      session: ['', Validators.required],
      courses: [[]]
    });
    this.newCourseForm = formBuilder.group({
      name: ['', Validators.required],
      hours: ['', Validators.required],
      scaleType: ['', Validators.required],
      scale: ['', Validators.required],
      gradeGroups: ['', Validators.required]
    })
    for(let i = 2014; i < 2035; i++) { this.yearsAvailable.push(i); }
  }

  ngOnInit() {
    this.getNextSemesterId();
  }


  newCourse() {
    this.creatingCourse = true;
  }

  receiveGroups(e) {
    this.areGroupsDone = true;
    this.newCourseForm.controls['gradeGroups'].setValue(e);
    this.courseObject = new Course(this.newCourseForm.value);
  }

  receiveScale(e) {
    this.isScaleDone = true;
    this.newCourseForm.controls['scale'].setValue(e);
    this.courseObject = new Course(this.newCourseForm.value);
  }

  saveCourse(course) {
    this.semesterForm.controls['courses'].value.push(course);
    this.resetNewCourse();
  }

  resetNewCourse() {
    this.newCourseForm.reset();
    this.isScaleDone = false;
    this.areGroupsDone = false;
    this.scale.reset();
    this.creatingCourse = false;
  }

  saveSemester() {
    this.isSaving = true;
    this.grade.saveNewSemester(this.uid, this.semesterForm.value, this.nextId);
    this.isSaving = false;
    this.router.navigateByUrl('/home');
  }

  getNextSemesterId() {
    this.grade.getSemesters(this.uid).subscribe((data) => {
      this.nextId = data[data.length-1].id + 1;
    })
  }





}
