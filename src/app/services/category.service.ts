import { Injectable } from '@angular/core';
import { ICateogry } from '../ViewModels/icateogry';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: ICateogry[];

  constructor() { 
    this.category=[{
      id:1,
      name:'Accessories'
    },
    {
      id:2,
      name:'Jackets'
    },
    {
      id:3,
      name:'Shoes'
    },
    {
      id:4,
      name:'T-Shirt'
    }
  ]

  }

  getCategories(){
    return this.category;
  }
}
