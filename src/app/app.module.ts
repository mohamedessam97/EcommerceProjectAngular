import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetatilsComponent } from './products/product-detatils/product-detatils.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { ProductFormComponent } from './admin/admin-products/product-form/product-form.component';
import { CustomFormsModule} from 'ng2-validation';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BrandComponent } from './brand/brand.component';
import { FeatureComponent } from './feature/feature.component';
import { CategoryComponent } from './category/category.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ReviewComponent } from './review/review.component';
import { EditComponent } from './admin/admin-products/edit/edit.component';
// import { WishlistComponent } from './wishlist/wishlist.component'
// import { CartServiceComponent } from './services/cart-service/cart-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ShopCartComponent,
    ProductDetatilsComponent,
    HomeComponent,
    ErrorComponent,
    ShippingDetailsComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    RegisterComponent,
    LoadingSpinnerComponent,
    ProductFormComponent,
    SideMenuComponent,
    NavbarComponent,
    BannerComponent,
    BrandComponent,
    FeatureComponent,
    CategoryComponent,
    CallToActionComponent,
    ReviewComponent,
    EditComponent,
    // WishlistComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
