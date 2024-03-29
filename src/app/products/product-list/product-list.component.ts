import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { StaticProductService } from 'src/app/services/static-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: any[] = [];
  prodListCategory: any;
  category: number;
  productData:any=[];
  favorite: any = [];
  


  constructor(
    private staticPrdService: StaticProductService,
    private cartService: CartServiceService,
    private route: ActivatedRoute
  ) {
 
    
    route.queryParamMap.subscribe((params) => {
      this.category = Number(params.get('category'));
      this.prodListCategory = this.category
        ? this.productList.filter((p) => p.categoryId === this.category)
        : this.productList;
    });
  }

  ngOnInit(): void {
    this.staticPrdService.getAllProducts().subscribe((data) => {
      this.prodListCategory = data;
      this.productList = this.prodListCategory;
      console.log(data);
      
    });
  }

  filter(query: string) {
    this.prodListCategory = query
      ? this.productList.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : this.productList;
  }

  addToCart(prd: any) {
    this.cartService.addToCart(prd);
  }

  removeFromCart(prd: any) {
    this.cartService.removeFromCart(prd);
  }

  // addToFavourite(index:number)
  // {
  //   if (localStorage.getItem("favorite") !== null) {
  //     this.favorite = JSON.parse(localStorage.getItem('favorite')!)
  //     this.favorite.push(this.productData[index])
  //     localStorage.setItem('favorite', JSON.stringify(this.favorite))
  //   } else {
  //     this.favorite.push(this.productData[index])
  //     localStorage.setItem('favorite', JSON.stringify(this.favorite))
  //   }

  //   console.log("added sucessfully");
  // }
}
