import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getAllOrders()
  {
    return this.http.get("http://localhost:3000/orders/getALLOrders");
  }

  changeStates(orderId: any , status: any , token:any){
    // const status ={status:value}
    return this.http.put("http://localhost:3000/orders/verify_order",{orderId,status,token});
  }


  addProduct(){
    
  }
}
