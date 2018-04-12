import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {
    this.authService.isLoggedIn();
  }

  ngOnInit() {
    document.getElementById('logout').style.display = "none"
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        document.getElementById('logout').style.display = "inline"
        this.router.navigate(['/home']);
      })
    .catch((err) => console.log(err));
  }

}