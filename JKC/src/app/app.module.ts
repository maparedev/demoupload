import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';
import { CategoryListComponent } from './category/category-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './security/login.component'
import { SecurityService } from './security/security.service';
import { ProductViewComponent } from './product-view/product-view.component';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './security/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryListComponent,
    DashboardComponent,
    LoginComponent,
    ProductViewComponent,
    ShoppageComponent,
    CartComponent,
    CheckoutComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService, CategoryService, SecurityService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
