import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { GradeReceiverService } from '../../services/grade-receiver.service';
import { Semester } from '../../models/semester.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CourseComponent } from './course/course.component';
import { Course } from '../../models/course.model';

@Component({
  selector: 'gt-semester-detail',
  templateUrl: './semester-detail.component.html',
  styleUrls: ['./semester-detail.component.scss']
})
export class SemesterDetailComponent {
  semester: Semester;
  id: any;
  uid: string;
  errorMessage: string;
  courseBeingEditted = false;
  courseToEditIndex: number;
  courseToEdit: any;
  @ViewChildren(CourseComponent) components: QueryList<CourseComponent>;

  constructor(public GradeReceiver: GradeReceiverService,
              public route: ActivatedRoute,
              private auth: AuthService) {
    route.params.forEach((param) => {
      this.id = param['id']
      this.uid = param['uid'];
    });

    this.GradeReceiver.getSemesterById(this.uid,this.id).subscribe((data:any) => {
      if (data) this.semester = new Semester(data);
    }, error => this.errorMessage = <any> error);
  }

  saveCourse(e, originalCourse) {
    this.semester.courses.forEach((course) => {
      if(course == originalCourse) {
        course = e;
      }
    });
    this.saveSemester();
  }

  saveSemester() {
    this.GradeReceiver.updateSemester(this.uid, this.semester);
    document.getElementsByClassName('changes-saved')[0].classList.add('block');
    setTimeout(() => {
      document.getElementsByClassName('changes-saved')[0].classList.remove('block');
    },3000);
  }

  courseEditing(courseToEdit) {
    this.courseBeingEditted = true;
    this.courseToEditIndex = this.semester.courses.indexOf(courseToEdit);
    this.courseToEdit = new Course(courseToEdit);
  }

  editComplete() {
    let newCourse = this.components.toArray()[this.courseToEditIndex].courseObj;
    newCourse.gradeScale = this.components.toArray()[this.courseToEditIndex].getScale();
    this.semester.courses[this.courseToEditIndex] = newCourse;
    this.saveSemester();
    this.courseToEditIndex = null;
    this.courseBeingEditted = false;
  }

  cancelEdittingCourse() {
    this.components.toArray()[this.courseToEditIndex].courseObj = this.courseToEdit;
    this.components.toArray()[this.courseToEditIndex].edit = false;
    this.courseToEditIndex = null;
    this.courseBeingEditted = false;
  }

  get canSaveEdittedCourse() {
    return this.courseToEditIndex != null && 
           this.courseBeingEditted == true && 
           this.components.toArray()[this.courseToEditIndex].scaleComp &&
           this.components.toArray()[this.courseToEditIndex].scaleComp.isScaleValid
  }
}
