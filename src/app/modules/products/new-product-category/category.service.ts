import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Category} from '../category.model'
import {Subject} from  'rxjs'



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

private categories:Category[]=[]
private categoriesUpdated = new Subject<Category[]>();

constructor(private http: HttpClient) { }



getCategory(){
  this.http.get<{message:string,categories:Category[]}>('http://localhost:3000/api/categories').subscribe((catData)=>{
this.categories = catData.categories
this.categoriesUpdated.next([...this.categories])
  });
}

getCategoryUpdateListener(){
  return this.categoriesUpdated.asObservable();
}
addCategory(categoryName:string,categoryCode:string){
    const category:Category={

      
      categoryName:categoryName,
      categoryCode:categoryCode
    }
    this.categories.push(category)
    this.categoriesUpdated.next([...this.categories])
}

 /* private _catUrl = "http://localhost:3000/api/new-product-category"
  constructor(private http: HttpClient) { }
  //addCategory(category:any){
    return this.http.post<any>(this._catUrl,category)
  }
  */
}

