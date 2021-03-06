import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { SemesterDetailComponent } from './screens/semester-detail/semester-detail.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { CreateSemesterComponent } from './screens/create-semester/create-semester.component';
import { LoginComponent } from './screens/login/login.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeScreenComponent },
    { path: ':uid/semester/:id', component: SemesterDetailComponent },
    { path: 'semester-create', component: CreateSemesterComponent },
    { path: 'login', component: LoginComponent }
]

// @NgModule({
//     imports: [
//       RouterModule.forRoot(
//         appRoutes,
//         { enableTracing: true } // <-- debugging purposes only
//       )
//     ],
//     exports: [
//       RouterModule
//     ]
//   })
//   export class AppRoutingModule {}
