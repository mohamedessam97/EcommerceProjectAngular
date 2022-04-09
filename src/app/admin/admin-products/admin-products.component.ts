import { Component, OnInit } from '@angular/core';
import { StaticProductService } from 'src/app/services/static-product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
products:any=[];
// product:IProduct;
filteredProducts:any;
// tableResource:DataTableResource<IProduct>;
// items:IProduct[]=[];
// itemCount:number;

token:any;

  constructor(private prdService:StaticProductService) {
    prdService.getAllProducts().subscribe(
      data=>{
        this.filteredProducts=this.products=data;
    console.log(this.filteredProducts);

      }
    );

  this.token=localStorage.getItem('token')
    
    // this.tableResource= new DataTableResource(this.products);
    // this.tableResource.query({offset:0})
    // .then(items => this.items =items)
    // this.tableResource.count()
    // .then(count=>this.itemCount=count);
   }

  ngOnInit(): void {

  }

  del(_id:any ){
    this.prdService.deleteProduct(_id,this.token).subscribe(e=>{
      console.log(e);
      
    })
  }

  // reloadItems(params:any){
  //   if(!this.tableResource) return;

  //   this.tableResource.query(params)
  //   .then(items => this.items =items)
  // }

  filter(query:string){
    this.filteredProducts= (query)?
    this.products.filter((p:any)=>p.name.toLowerCase().includes(query.toLowerCase())) :
    this.products
  }
}
