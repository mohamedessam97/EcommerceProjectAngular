import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  selectedId:number;
  cartProducts:IProduct[]=[];
   prdList:IProduct[];
  constructor(private http:HttpClient) {
    this.prdList=[
      { id:"6233155357dcfc6c87ef1bb0", name:'Lenovo ThinkBook', quantity:0, price:13000, img:'https://fakeimg.pl/150x100/', cateogryId:1 },
      { id:"6233155357dcfc6c87ef1bbs", name:'MacBook Pro', quantity:1, price:25000, img:'https://fakeimg.pl/150x100/', cateogryId:1 },
      { id:"6233155357dcfc6c87ef1bsss", name:'MacBook Air', quantity:2, price:35000, img:'https://fakeimg.pl/150x100/', cateogryId:1 },
      { id:"6233155357dfsc6c87ef1bb0", name:'Iphone 13 pro max', quantity:4, price:23000, img:'https://fakeimg.pl/150x100/', cateogryId:2 },
      { id:"6233155357dsdc6c87ef1bb0", name:'Samsung s21 UltrA', quantity:3, price:20000, img:'https://fakeimg.pl/150x100/', cateogryId:2 },
      { id:"6233155357dfvc6c87ef1bb0", name:'Oppe Reno 6', quantity:6, price:8000, img:'https://fakeimg.pl/150x100/', cateogryId:2 },
      { id:"6233155357dasc6c87ef1bb0", name:'Huawei MatePad T10s ', quantity:10, price:6000, img:'https://fakeimg.pl/150x100/', cateogryId:3 },
      { id:"6233155357dcsc6c87ef1bb0", name:'Realme Pad - 10.4', quantity:0, price:7000, img:'https://fakeimg.pl/150x100/', cateogryId:3 },
      { id:"6233155357addc6c87ef1bb0", name:'Huawei Mate Pad T10s', quantity:2, price:5000, img:'https://fakeimg.pl/150x100/', cateogryId:3 },
      { id:"6233155357vfddc6c87ef1bb0", name:'Samsung Galaxy Tab A', quantity:8, price:8000, img:'https://fakeimg.pl/150x100/', cateogryId:3 },
      
      
    ];
  }


  

  getAllProducts()
  {
    // let c ; 
    return this.http.get('http://localhost:3000/products/get_all_products')

    ;
    
    // return this.prdList;
  }

  addProduct(token:any, name :any, price:any , quantity :any, description :any, categoryId:any, pictures:any){
    return this.http.post("http://localhost:3000/products/add_product",{token, name , price , quantity , description , categoryId, pictures});

  }
  editProduct(token:any, name :any, price:any , quantity :any, description :any, categoryId:any, pictures:any , productId:any){
    return this.http.put("http://localhost:3000/products/update_product",{token, name , price , quantity , description , categoryId, pictures , productId});

  }




  deleteProduct(productId:any, token:any){
    return this.http.post('http://localhost:3000/products/delete_product', {token ,productId})

  }
  

  getProductById(productId:any)
  {
    // let foundProduct=this.prdList.find(prd => prd.id === pId)
    // return foundProduct? foundProduct : null;
    return this.http.post('http://localhost:3000/products/get_product_details',{productId})
  }
}
