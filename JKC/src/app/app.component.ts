import { Component } from '@angular/core';
import { StoreService } from './Services/store.service';

@Component({
  selector: 'ptc-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "Paul's Training Company";

  constructor(public storeService : StoreService){

  }
  onLogout() {
    this.storeService.logOut();
  }
}
