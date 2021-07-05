import { Component, OnInit } from '@angular/core';
import { StoreService } from '../Services/store.service';
import { PaymentData } from '../Shared/payment-data';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentDisable : boolean = true;
  errorMessage : string;
  paymentData = new PaymentData();  
  
  constructor(public storeService: StoreService) {

  }

  ngOnInit(): void {


    this.storeService.getPaymentFormRequest()
    .subscribe(data =>{
      this.paymentData = data;      
      this.paymentDisable = false;      
      console.log(this.paymentData);
    }, err =>{
      this.errorMessage = `Failed to get payment data ${this.errorMessage}`;
    });

  }

}
