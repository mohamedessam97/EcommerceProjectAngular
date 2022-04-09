import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  error: string;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signIn(email, password).subscribe(
      (data) => {
        this.user = { ...data };
        this.isLoading = false;
        localStorage.setItem('userId', this.user.data.userId);
        localStorage.setItem('token', this.user.data.token);
        localStorage.setItem('isAdmin', this.user.data.isAdmin);
        localStorage.setItem('fname', this.user.data.firstName);
        localStorage.setItem('lname', this.user.data.lastName);
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );

    let token = localStorage.getItem('token');
    if (token) {
      history.back();
    }
  }
}
