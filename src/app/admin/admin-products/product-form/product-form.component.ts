import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { StaticProductService } from 'src/app/services/static-product.service';
import { ICateogry } from 'src/app/ViewModels/icateogry';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  categories: ICateogry[];
  currPrdId: number;
  prd:any={};
  token:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private catgService: CategoryService,
    private prdService: StaticProductService
  ) {
    this.token=localStorage.getItem('token');
    this.categories = catgService.getCategories();
    this.currPrdId=Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if(this.currPrdId) 
    this.prd=prdService.getProductById(this.currPrdId);



  }

  ngOnInit(): void {}
  save(p:any) {
    console.log(p);
        const name= p.name;
        const price= p.price;
        const quantity=p.quantity;
        const description=p.description;
        const categoryId=p.categoryId;
        const picture=p.picture;
    this.prdService.addProduct(this.token, name , price , quantity , description , categoryId, picture).subscribe(e=>{
      console.log(e);
      
    });
    this.router.navigate(['/admin/products'])
  }

  del(prd:any){
    if(confirm('Are you sure you want to delete this product?')){
      this.router.navigate(['/admin/products'])
    }
  }
}
