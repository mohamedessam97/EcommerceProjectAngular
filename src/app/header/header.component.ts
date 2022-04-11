import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: string | null;
  userName: string | null;
  isAdmin: string | null;
  shoppingCartItemCount: number = 0;
  count: number;
  constructor(private CartService: CartServiceService ,
    private auth:AuthService) {
    this.userName = localStorage.getItem('fname');
    this.isAdmin = localStorage.getItem('isAdmin');
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('token');
    // this.auth.isLogin.subscribe(data=>{
    //   this.user = data;
    // });
    this.CartService.shoppingCartItemCount.subscribe((count) => {
      this.shoppingCartItemCount = 0;
      for (let i = 0; i < count.length; i++) {
        this.shoppingCartItemCount += count[i].quantity;
      }
    });
  }
  logout() {
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');
    localStorage.removeItem('userId');
    localStorage.removeItem('cart');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
  }
}
