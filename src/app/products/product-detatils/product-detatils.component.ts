import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { StaticProductService } from 'src/app/services/static-product.service';

@Component({
  selector: 'app-product-detatils',
  templateUrl: './product-detatils.component.html',
  styleUrls: ['./product-detatils.component.scss'],
})
export class ProductDetatilsComponent implements OnInit {
  currPrdId: any;
  selectedPrd: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: StaticProductService,
    private cartService: CartServiceService
  ) {}

  ngOnInit(): void {
    this.currPrdId = this.activatedRoute.snapshot.paramMap.get('pid');
    this.productService.getProductById(this.currPrdId).subscribe((data) => {
      this.selectedPrd = data;
    });
  }
  addToCart(prd: any) {
    this.cartService.addToCart(prd);
  }
}
