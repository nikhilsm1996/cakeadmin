import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _catUrl = "http://localhost:3000/api/new-product-category"
  constructor(private http: HttpClient) { }
  addCategory(category:any){
    return this.http.post<any>(this._catUrl,category)
  }
}
