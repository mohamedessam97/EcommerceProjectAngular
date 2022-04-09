import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'E-commerce';
  user=localStorage.getItem('token');
  returnUrl:any ;

  constructor(private router :Router){
  }
  ngOnInit(): void {
    
    if(this.user){
      this.returnUrl=localStorage.getItem('returnUrl');
      this.router.navigateByUrl(this.returnUrl);
    }

  }
}
