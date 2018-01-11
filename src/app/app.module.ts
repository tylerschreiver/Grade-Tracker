import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { GradeReceiverService } from './services/grade-receiver.service';
import { SemesterComponent } from './home-screen/semester/semester.component';
import { appRoutes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SemesterDetailComponent } from './semester-detail/semester-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SemesterComponent,
    SemesterDetailComponent
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
