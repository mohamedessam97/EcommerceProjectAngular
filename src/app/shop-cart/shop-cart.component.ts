import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
import { IProduct } from '../ViewModels/iproduct';
import { Store } from '../ViewModels/store';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
})
export class ShopCartComponent implements OnInit {
  productList: Store[] = [];
  prdNum: number[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartServiceService, private router: Router) {
    this.cartService.shoppingCartItemCount.subscribe((data) => {
      this.productList = data;
      this.totalPrice = this.cartService.totalPrice;
    });
  }

  ngOnInit(): void {
    this.cartService.shoppingCartItemCount.subscribe();

    for (let i = 0; i < this.productList.length; i++) {
      this.prdNum.push(Number(this.productList[i].product.price));
    }
  }

  addToCart(prd: IProduct) {
    this.cartService.addToCart(prd);
  }

  removeFromCart(prd: IProduct) {
    this.cartService.removeFromCart(prd);
  }
  onDeletProduct(_id: any) {
    this.productList = this.productList.filter(
      (product) => product.product._id !== _id
    );
  }
  clearCart() {
    this.cartService.clearCart();
  }

  next() {
    this.router.navigate(['/shippingDetails']);
  }
}
