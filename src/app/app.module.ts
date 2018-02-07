import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { GradeReceiverService } from './services/grade-receiver.service';
import { SemesterComponent } from './screens/home-screen/semester/semester.component';
import { appRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SemesterDetailComponent } from './screens/semester-detail/semester-detail.component';
import { CourseComponent } from './screens/semester-detail/course/course.component';
import { GradeGroupComponent } from './screens/semester-detail/grade-group/grade-group.component';
import { CreateSemesterComponent } from './screens/create-semester/create-semester.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GradeScaleComponent } from './screens/create-semester/grade-scale/grade-scale.component';
import { CreateGradeGroupComponent } from './screens/create-semester/create-grade-group/create-grade-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SemesterComponent,
    SemesterDetailComponent,
    CourseComponent,
    GradeGroupComponent,
    CreateSemesterComponent,
    GradeScaleComponent,
    CreateGradeGroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GradeReceiverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
