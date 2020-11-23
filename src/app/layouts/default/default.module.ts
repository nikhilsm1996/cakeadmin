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
import { NewProductComponent } from 'src/app/modules/products/new-product/new-product.component';
import { NewProductCategoryComponent } from 'src/app/modules/products/new-product-category/new-product-category.component';
import { LoginService } from 'src/app/modules/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from 'src/app/modules/products/new-product-category/category.service';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProductsComponent,
    LoginComponent,
    NewProductComponent,
    NewProductCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers:[LoginService,CategoryService]
})
export class DefaultModule { }
