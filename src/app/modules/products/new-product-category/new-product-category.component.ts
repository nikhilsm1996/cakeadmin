import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-new-product-category',
  templateUrl: './new-product-category.component.html',
  styleUrls: ['./new-product-category.component.css']
})
export class NewProductCategoryComponent implements OnInit {
  prodCategory:any={}
  constructor(private _cat:CategoryService) { }

  ngOnInit(): void {
  }
  addCategory(){
    this._cat.addCategory(this.prodCategory).subscribe(res=> {
      console.log(res)
     }, 
     err=> console.log(err))
  }

}
