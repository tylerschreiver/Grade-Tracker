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
  courseBeingAdded = false;
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
    if (this.courseBeingAdded) this.addCourseComplete();
    else {
      let newCourse = this.components.toArray()[this.courseToEditIndex].courseObj;
      newCourse.gradeScale = this.components.toArray()[this.courseToEditIndex].getScale();
      this.semester.courses[this.courseToEditIndex] = newCourse;
      this.saveSemester();
      this.courseToEditIndex = null;
      this.courseBeingEditted = false;
    }

  }

  cancelEdittingCourse() {
    if (this.courseBeingAdded) this.cancelAddingCourse();
    else {
      this.components.toArray()[this.courseToEditIndex].courseObj = this.courseToEdit;
      this.components.toArray()[this.courseToEditIndex].edit = false;
      this.courseToEditIndex = null;
      this.courseBeingEditted = false;
    }
  }

  get canSaveEdittedCourse() {
    return this.courseToEditIndex != null && 
           this.courseBeingEditted == true && 
           this.components.toArray()[this.courseToEditIndex].scaleComp &&
           this.components.toArray()[this.courseToEditIndex].scaleComp.isScaleValid
  }

  get canSaveAddedCourse() {
    let comp = this.components.toArray()[0]; 
    if (comp && comp.scaleComp) {
      comp.courseObj.gradeScale = comp.scaleComp.changeScale();
      let valid = comp.courseObj.name && 
                  comp.courseObj.hours && 
                  comp.courseObj.scaleType && 
                  comp.courseObj.gradeScale && 
                  comp.scaleComp.isScaleValid && 
                  comp.scaleComp.isConfirmed;
      return valid;
    }
    else return false
  }

  addCourse() {
    this.courseBeingAdded = true;
    let courses = this.semester.courses;
    this.semester.courses = [];
    this.semester.courses.push(new Course({}));
    courses.forEach((course) => {
      this.semester.courses.push(course);
    });
    setTimeout(() => {
      this.components.toArray()[0].edit = true;
    },1);
  }

  cancelAddingCourse() {
    this.semester.courses.splice(0,1);
    this.courseBeingAdded = false;
  }

  addCourseComplete() {
    this.semester.courses[0] = this.components.toArray()[0].courseObj;
    this.courseBeingAdded = false;
    this.saveSemester();
  }

  deleteCourse(course) {
    if (confirm("Are you sure you want to delete " + course.name)) {
      let index = this.semester.courses.indexOf(course);
      this.semester.courses.splice(index,1);
      this.saveSemester();
    }
  }
}
