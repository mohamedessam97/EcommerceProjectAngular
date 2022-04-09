import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { StaticProductService } from 'src/app/services/static-product.service';
import { ICateogry } from 'src/app/ViewModels/icateogry';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  categories: ICateogry[];
  currPrdId: any;
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
    this.currPrdId=this.activatedRoute.snapshot.paramMap.get('id');
    
    console.log(this.currPrdId);
    if(this.currPrdId) 
    prdService.getProductById(this.currPrdId).subscribe(
      e=>{
        this.prd=e;
      }
    );
    console.log(this.prd);



  }

  ngOnInit(): void {}
  save(p:any) {
    console.log(p);
        const name= p.name;
        const price= p.price;
        const quantity=p.quantity;
        const description=p.description;
        const categoryId=p.categoryId;
        const pictures=p.pictures;
    this.prdService.editProduct(this.token, name , price , quantity , description , categoryId, pictures , this.currPrdId).subscribe(e=>{
      console.log(e);
      
    });
    // this.router.navigate(['/admin/product'])
  }

  del(prd:any){
    if(confirm('Are you sure you want to delete this product?')){
      this.router.navigate(['/admin/products'])
    }
  }
}
