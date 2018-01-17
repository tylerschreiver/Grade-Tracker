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

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SemesterComponent,
    SemesterDetailComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GradeReceiverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
