import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { EditComponent } from './admin/admin-products/edit/edit.component';
import { ProductFormComponent } from './admin/admin-products/product-form/product-form.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductDetatilsComponent } from './products/product-detatils/product-detatils.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainLayoutComponent,
  //   children: [
  //   ],
  // },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shopcart', component: ShopCartComponent },
  { path: 'shippingDetails', component: ShippingDetailsComponent },
  { path: 'productdetails/:pid', component: ProductDetatilsComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'my/orders', component: MyOrdersComponent },

  { path: 'admin/products/new', component: ProductFormComponent },
  // { path: 'admin/products/edit', component: EditComponent },
  { path: 'admin/products/:id', component: EditComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
