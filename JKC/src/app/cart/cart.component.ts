import { Component, OnInit } from '@angular/core';
import { StoreService } from '../Services/store.service';
import { Order } from '../Shared/order';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public store : StoreService) { }

  ngOnInit(): void {
  }

  onClearCart() : void {
    this.store.order = new Order();
  }
}
