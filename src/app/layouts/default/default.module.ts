import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import { LoginComponent } from 'src/app/modules/login/login.component';
import {FormsModule} from '@angular/forms'
import {MatTabsModule} from '@angular/material/tabs'
import {MatExpansionModule} from '@angular/material/expansion';
import { NewProductComponent } from 'src/app/modules/products/new-product/new-product.component';
import { NewProductCategoryComponent } from 'src/app/modules/products/new-product-category/new-product-category.component';

import { HttpClientModule } from '@angular/common/http';
import {NewProductCategoryListComponent} from '/home/nikhil123/timex/Ruchi-Cakes/src/app/modules/products/new-product-category/new-product-category-list/new-product-category-list.component'
//import { CategoryService } from 'src/app/modules/products/new-product-category/category.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent,
    LoginComponent,
    NewProductComponent,
    NewProductCategoryComponent,
    NewProductCategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FormsModule,
    MatTabsModule,
    MatExpansionModule,
    HttpClientModule
  ],
  
  providers:[]
})
export class DefaultModule { }
