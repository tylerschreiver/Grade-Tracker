import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router,
              private auth: AuthService) {}
  title = 'Barely Passing';

  navToHome() {
    if (this.auth.isLoggedIn()) this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }
}
