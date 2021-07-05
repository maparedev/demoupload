import { Component, OnInit } from '@angular/core';
import {StoreService} from '../Services/store.service'

@Component({
  selector: 'product-list',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public products = [];
  constructor(public store: StoreService) {
      
      
  }

  ngOnInit(): void {
    
      this.store.loadProducts().subscribe(() =>{

      });
}

}
