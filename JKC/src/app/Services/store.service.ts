import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginRequest, LoginResult } from '../Shared/login-result';
import { Order, OrderItem } from '../Shared/order';
import { PaymentData } from '../Shared/payment-data';
import { Product } from '../Shared/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public paymentData = new PaymentData();
  public products : Product[] = [];
  public order: Order = new Order();
  public token = "";
  private userName = "";
  public expiration = new Date();
  public BaseUrl = "http://localhost:8888";

  constructor(private http: HttpClient) {
    this.token =  localStorage.getItem("token") != null ? localStorage.getItem("token") : "";
   }

  login(creds: LoginRequest){
   return this.http.post<LoginResult>(this.BaseUrl + "/account/createtoken",creds)
      .pipe(map(data=> {

        this.token = data.token;
        this.expiration = data.expiration;       
        this.userName = data.username; 
        localStorage.setItem("userName",this.userName);
        localStorage.setItem("token",this.token);
        localStorage.setItem("expiration",this.expiration.toString());

      }));
  }

  get getUserName() : string{
    return  localStorage.getItem("userName");
  }
  get loginRequired() : boolean {

    debugger;
    this.token =  localStorage.getItem("token") != null ? localStorage.getItem("token") : "";
    this.expiration = new Date(localStorage.getItem("expiration"));

    return this.token.length === 0 || this.expiration < new Date();
  }

  logOut() {

    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    
}

  getPaymentFormRequest(): Observable<PaymentData>{
    debugger;
    this.paymentData.amountValue = this.order.subtotal.toString();      
    this.paymentData.emailValue = "mapare121@gmail.com";      
    this.paymentData.productInfoValue ="My Test product";
    this.paymentData.surlValue = "http://localhost:60116/ResponseHandling.aspx";
    this.paymentData.furlValue = "http://localhost:60116/ResponseHandling.aspx";
    this.paymentData.firstNameValue = "vivek";
    this.paymentData.phoneValue = "09595159451";
    this.paymentData.lastNameValue = "mapare";
    this.paymentData.curlValue = "http://localhost:60116/ResponseHandling.aspx";
    this.paymentData.address1Value = "Address1";
    this.paymentData.address2Value = "Address2";
    
    this.paymentData.cityValue = "City";
    this.paymentData.stateValue = "State";
    this.paymentData.countryValue = "India"
    this.paymentData.zipCodeValue = "332323";

    this.paymentData.udf1Value = "UDF1";
    this.paymentData.udf2Value = "UDF2";
    this.paymentData.udf3Value = "UDF3";
    this.paymentData.udf4Value = "UDF4";
    this.paymentData.udf5Value = "PayUBiz_ASP.NET_Kit";
    this.paymentData.pgValue = "CC";

    const header = new HttpHeaders().set("Authorization", `Bearer ${this.token}`)
    return this.http.post<PaymentData>(this.BaseUrl +"/api/Payment/GetPaymentRequest",this.paymentData,{
      headers: header
    })
      .pipe(map(data=> {
        debugger;
        return this.paymentData = data;

      }));
  }

  checkout(){
    const header = new HttpHeaders().set("Authorization", `Bearer ${this.token}`)
    debugger;  
      return this.http.post(this.BaseUrl + "/api/orders",this.order,{
        headers: header
      })
        .pipe(map(() =>{
            //this.order = new Order();
        })); 
  }

  loadProducts(): Observable<void> {
     return this.http.get<[]>(this.BaseUrl +"/api/products")
          .pipe(map(data => {
              this.products = data;
              return;
          }));
  }

  addToOrder(product: Product){

    let item = new OrderItem();
    item = this.order.items.find(o=>o.productId == product.id);

    if(item) {
      item.quantity++;
    }
    else {      
      item = new OrderItem();
      item.productId = product.id;        
      item.productTitle = product.title;
      item.productArtId = product.artId;
      item.productArtist = product.artist;
      item.productSize = product.size;
      item.unitPrice = product.price;
      item.quantity = 1;
      item.productCategory = product.category;

      this.order.items.push(item);
    }

    

  }
}
