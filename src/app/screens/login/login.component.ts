import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };


  constructor(public authService: AuthService, private router: Router) {
    this.authService.isLoggedIn();
  }
    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['login'])
        })
      .catch((err) => console.log(err));

      this.authService.isLoggedIn();
    }

  ngOnInit() {
  }

}