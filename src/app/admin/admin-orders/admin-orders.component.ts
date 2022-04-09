import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  actionDone:boolean
  orders:any;
  token: any;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {

       //call service to get all orders and equal respont to orders lis
       this.orderService.getAllOrders().
        subscribe((respond:any) =>
        {
          console.log(respond);
          this.orders=respond;
        },
        (error)=>
        {
          console.log(error);
        }
        )

        this.token=localStorage.getItem('token')
  }

  change(id :any,value:any){
    

      this.orderService.changeStates(id,value, this.token)
      .subscribe((res:any)=>{

        console.log(res);
        this.orderService.getAllOrders().
        subscribe((respond:any) =>
        {
          console.log(respond);
          this.orders=respond;
        },
        (error)=>
        {
          console.log(error);
        }
        )
        
      })
      
}

}
