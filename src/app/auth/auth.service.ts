import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

interface RegisterResponseData{
  status:string,
  data:string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    loggedIn=false;
    constructor(private http: HttpClient ,private route:ActivatedRoute) { }
    


  signUp(email:string, password:string , zip:string , fName:string, lName:string ,country:string,street:string){
    return this.http.post<RegisterResponseData>('http://localhost:3000/users/register',
     {
        email:email,
        password:password,
        zip:zip,
        firstName:fName,
        lastName:lName,
        country:country,
        street:street,
     })
     .pipe(catchError(errorRes =>{
      let errorMessage='An unknown error occured!'
      if(!errorRes.error||!errorRes.error.error){
        return throwError(errorMessage)
      }
       switch (errorRes.error.error.message){
          case "Email":
            errorMessage="The Email Exists already!"
         }
        return throwError(errorMessage)

    })
    )
  }

  signIn(email:string, password:string){
    
    return this.http.post('http://localhost:3000/users/login',
    {
      email:email,
      password:password
    }).pipe(catchError(errorRes =>{
      let errorMessage='An unknown error occured!'
      if(!errorRes.error||!errorRes.error.error){
        return throwError(errorMessage)
      }
       switch (errorRes.error.error.message){
          case "Email":
            errorMessage="The Email Exists already!"
         }
        return throwError(errorMessage)

    }))
    
  }
}