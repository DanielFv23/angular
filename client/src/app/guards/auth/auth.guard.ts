import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , UrlTree } from '@angular/router';
import { AuthService} from '../../servicios/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router : Router, private authService: AuthService){

  }

  canActivate (
     next : ActivatedRouteSnapshot ,
             state: RouterStateSnapshot): Observable <boolean> | Promise<boolean> | UrlTree
     {
      // return this.authService.isLoggedIn;
      return
  }


}

