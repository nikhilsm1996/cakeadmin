import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import {Category } from '../category.model'
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-new-product-category',
  templateUrl: './new-product-category.component.html',
  styleUrls: ['./new-product-category.component.css']
})
export class NewProductCategoryComponent implements OnInit {
  
  constructor(public catService:CategoryService) { }

  ngOnInit(): void {
  }
  addCategory(form:NgForm){
    if(form.invalid){
      return
    }
    
    this.catService.addCategory(form.value.category,form.value.code)
  }

}
