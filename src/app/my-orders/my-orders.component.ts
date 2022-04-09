import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  token:any;
  orders:any;
  orderD:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let token=localStorage.getItem('token')
    console.log(this.token);
    
    this.http.post("http://localhost:3000/orders/getOrder",{token}).subscribe(
      e=>{
          this.orders=e      
          console.log(this.orders);
          
      }
    )

    

    
    // this.http.get("http://localhost:3000/orders/getAllOrders").subscribe(
    //   e=>{
    //     console.log(e);
        
    //   }
    // )
  }
  get totalPrice(){
    let sum =0 ;
    for(let i =0 ;i<this.orderD.length;i++){
      sum +=(this.orderD[i].product.price*this.orderD[i].quantity)
    }
    return sum;
  }
  show(p:any){
    this.orderD=p;
    console.log(p);
    
  }
}
