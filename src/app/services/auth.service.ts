import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User;
  uid: string;
constructor(private _firebaseAuth: AngularFireAuth, 
            private router: Router) { 
      this.user = _firebaseAuth.authState;
      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            this.uid = user.uid;
          }
          else {
            this.userDetails = null;
          }
        }
      );
    }
  
  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      this.router.navigate(['login']);
      return false;
    }
    else return true;
  }

  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
  
  getUserDetails() {
    return this._firebaseAuth.authState;
  }  
}

