import { Component, OnInit, OnDestroy } from '@angular/core';
import {CategoryService} from '../category.service'
import {Category} from 'src/app/modules/products/category.model'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-new-product-category-list',
  templateUrl: './new-product-category-list.component.html',
  styleUrls: ['./new-product-category-list.component.css']
})
export class NewProductCategoryListComponent implements OnInit,OnDestroy {
   private categoriesSub!: Subscription;
  
  categories:Category[]=[];
   


   
  constructor(public catService:CategoryService) { }

  ngOnInit() {
    this.catService.getCategory();
   this.categoriesSub =  this.catService.getCategoryUpdateListener().subscribe((categories:Category[])=>{
            this.categories = categories
    });
  }
  ngOnDestroy(){
    this.categoriesSub.unsubscribe();;
  }

}
