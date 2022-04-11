import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService implements OnInit {
  items:{
    product:any,
    quantity:number,
  }[]=[];
  shoppingCartItemCount: BehaviorSubject<any>;
  
  // totalPrice:number 
  // filterdProduct:IProduct[];
  // count: number;


  constructor(private http:HttpClient) { 
    // this.count=0;
    this.shoppingCartItemCount = new BehaviorSubject([]);
  }
  ngOnInit(): void {
    
  }

  get totalPrice(){
    let sum =0 ;
    for(let i =0 ;i<this.items.length;i++){
      sum +=(this.items[i].product.price*this.items[i].quantity)
    }
    return sum;
  }
  
  removeFromCart(prd:any){
    for( let i =0 ; i< this.items.length ; i++){
      if (this.items[i].product === prd){
        if(this.items[i].quantity>1){
          this.items[i].quantity--;
          
          console.log(this.items[i].quantity);
          
        }else{
          this.items=this.items.filter(el=>{
            return el.product._id!==prd._id;
          })

        }
      }
    }
    this.shoppingCartItemCount.next(this.items);

  }
  addToCart(product: any) {
    const exist = this.items.find((p)=>{
      return p.product._id ===product._id
    }) 

    if(exist){
      exist.quantity++;
    }else{
      this.items.push({product:product,quantity:1}); 

    }

    this.shoppingCartItemCount.next(this.items)
    localStorage.setItem("cart",JSON.stringify(this.items))
  }

  getCartItemQuantity(){
    // for(let i=0;i<this.items.length;i++){

    //   this.count+=this.items[i].quantity;
    // }
    // this.shoppingCartItemCount.next(this.count)
    // console.log(this.shoppingCartItemCount);
    // return this.shoppingCartItemCount;
    
  }
  
  deleteProduct(id:number){
    // this.filterdProduct=this.products.filter( prd => prd.id !== id);
    // this.products=this.filterdProduct;
    // console.log(this.products);
    
  }
  
  getProductPrice(){
    // let totalPrice =this.products.find(prd => prd.id == pId)?.price;
    // this.products.forEach(prd => this.totalPrice+=prd.price)
    
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    
    this.items = [];
    this.shoppingCartItemCount.next(this.items);
  //   return this.items;
  }
}

