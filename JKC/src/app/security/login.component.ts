import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from '../Shared/login-result';
import { StoreService } from '../Services/store.service';

@Component({
  selector: 'ptc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errorMessage : string;

  public user: LoginRequest = {
    username: "",
    password:""
  }
  constructor(private  store: StoreService, private router: Router) { }

  login() : void {
    
    this.store.login(this.user)
      .subscribe(() =>{
        //sucessfully logged in 
          if(this.store.order.items.length > 0){
            this.router.navigate(["checkout"]);            
          }
          else{
            this.router.navigate([""]);
          }
      },
        error => {
          console.log(error);
          this.errorMessage = "Failed to login";
        });
    }
  
  ngOnInit(): void {
  }

}