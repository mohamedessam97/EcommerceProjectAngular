import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) {}
  isLoading = false;
  error: string;
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.pass;
    const zip = form.value.zip;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const country = form.value.country;
    const street = form.value.street;

    this.isLoading = true;
     this.authService.signUp(email,password,zip,firstName,lastName,country,street)
     .subscribe(res=> {
       this.isLoading=false;

     }
     ,
     error=>{

          this.error=error;
       this.isLoading=false;

     }
     )
    form.reset();
  }
}
