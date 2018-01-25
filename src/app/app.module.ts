import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { GradeReceiverService } from './services/grade-receiver.service';
import { SemesterComponent } from './screens/home-screen/semester/semester.component';
import { appRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { SemesterDetailComponent } from './screens/semester-detail/semester-detail.component';
import { CourseComponent } from './screens/semester-detail/course/course.component';
import { GradeGroupComponent } from './screens/semester-detail/grade-group/grade-group.component';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SemesterComponent,
    SemesterDetailComponent,
    CourseComponent,
    GradeGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [GradeReceiverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
