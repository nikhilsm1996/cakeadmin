import { Component, OnInit } from '@angular/core';
import {Product} from './products.model'
import {CategoryService} from '/home/nikhil123/timex/Ruchi-Cakes/src/app/modules/products/new-product-category/category.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products :Product[]=[
  //   new Product('Black Forest Gateau','category1','sample recipes1','sample description1','https://i.ndtvimg.com/i/2015-11/black-forest_625x350_81447409128.jpg',550,23,'1 KG'),
  //   new Product('Pineapple Cake','category2','sample recipes2','sample description2','https://i.ndtvimg.com/i/2015-11/pineapple-cake_625x350_61447412471.jpg',450,35,'1.5 KG'),
  //   new Product('Cherry Cheese Cake','category3','sample recipes3','sample description3','https://i.ndtvimg.com/i/2015-11/cherry-cheesecake_625x350_61447417014.jpg',750,10,'2 KG'),
  //   new Product('Fudgy Chocolate Cake','category4','sample recipes3','sample description3','https://www.ndtv.com/cooks/images/coffee-cake_article.jpg',950,10,'1 KG'),

  // ]
  constructor(public catService:CategoryService) { }

  ngOnInit(): void {
  }

}
