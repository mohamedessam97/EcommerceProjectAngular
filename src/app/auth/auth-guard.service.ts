import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  user=localStorage.getItem('token');
  constructor(private router :Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.user){
      // history.back();
      // location.reload()
      return true;
    } 

    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}})
    return false;
    
  }
  
  // canActivate(route:RouterStateSnapshot, state:RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean>{
    
}

