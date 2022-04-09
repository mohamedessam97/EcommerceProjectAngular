import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss'],
})
export class ShippingDetailsComponent implements OnInit {
  c: any;
  cart: any;
  tokens: string | null;
  shoppingCartItemCount: number;
  userData: string | null;
  totalPrice: any;

  constructor(
    private router: Router,
    private cartService: CartServiceService,
    private http: HttpClient
  ) {
    this.userData = localStorage.getItem('fname');
  }
  ngOnInit(): void {
    this.cartService.shoppingCartItemCount.subscribe((count) => {
      console.log(count[0].quantity);
      this.shoppingCartItemCount = 0;
      for (let i = 0; i < count.length; i++) {
        this.shoppingCartItemCount += count[i].quantity;
      }
      this.totalPrice = this.cartService.totalPrice;
    });

    this.c = localStorage.getItem('cart');
    this.cart = eval(this.c);
    this.tokens = localStorage.getItem('token');

    if (this.tokens === null) {
      this.router.navigate(['/login']);
    }
  }
  placeOrder() {
    let order = {
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      products: this.cart,
      date: new Date().getTime(),
      price: this.cartService.totalPrice,
    };
    this.http.post('http://localhost:3000/orders/checkout', order).subscribe();
    this.cartService.clearCart();

    this.router.navigate(['/order-success']);
  }
}
