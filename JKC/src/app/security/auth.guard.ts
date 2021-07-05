import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from '../Services/store.service';
import { SecurityService } from './security.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private store: StoreService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot)
     : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {    
      
       if(this.store.loginRequired){
         this.router.navigate(["login"]);
         return false;
       }
       else
       {
         return true;
       }

  }

}
