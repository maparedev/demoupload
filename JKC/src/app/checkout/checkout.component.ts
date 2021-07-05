import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../Services/store.service';
import { PaymentData } from '../Shared/payment-data';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  paymentEnable : boolean;
  errorMessage : string;
  
  
    constructor(public storeService   : StoreService, private router: Router) {
    }

  ngOnInit(): void {
           
  }
    
  onConfirmOrder() {        

    this.errorMessage = "";

    this.storeService.checkout()
    .subscribe (data=>{
      debugger;    
      this.paymentEnable = true;
        this.router.navigate(["payment"])
    }, err=>{
          this.errorMessage = `Failed to Confirm ${this.errorMessage}`
    })
  }


}
