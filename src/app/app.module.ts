import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { GradeReceiverService } from './services/grade-receiver.service';
import { SemesterComponent } from './home-screen/semester/semester.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    SemesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GradeReceiverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
