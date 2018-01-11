import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SemesterDetailComponent } from './semester-detail/semester-detail.component';
import { NgModule } from '@angular/core/src/metadata/ng_module';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeScreenComponent },
    { path: 'semester/:id', component: SemesterDetailComponent }
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