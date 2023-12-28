import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated = false;
  displayError = false;
  jwtToken = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }

    const username = form.value.username;
    const password = form.value.password;

    this.authService.login(username, password).subscribe({
      next: (data : any) => {
          this.authService.token = data.jwt;
          this.displayError = false;
          this.router.navigate(['catalog']);
      },
      error: error => {
          console.error('Invalid credentials!', error);
          this.displayError = true;
          return error.message;
      }});
  }

  getToken() {
    return this.jwtToken;
  }

  checkIsAuthenticated() {
    return this.isAuthenticated;
}

}
