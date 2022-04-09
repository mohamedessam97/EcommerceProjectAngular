import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  categories: any;
  @Input('category') category:any;

  constructor(private categService:CategoryService) { 
    this.categories=categService.getCategories();

  }

  ngOnInit(): void {
  }

}
