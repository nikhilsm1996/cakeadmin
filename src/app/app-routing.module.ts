import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { NewProductCategoryComponent } from './modules/products/new-product-category/new-product-category.component';
import { NewProductComponent } from './modules/products/new-product/new-product.component';
import { ProductsComponent } from './modules/products/products.component';
import { NewProductCategoryListComponent} from '/home/nikhil123/timex/Ruchi-Cakes/src/app/modules/products/new-product-category/new-product-category-list/new-product-category-list.component'

const routes: Routes = [{
  path: '', component:LoginComponent
},
{path:'new-category',component:NewProductCategoryComponent},{path:'admin',component:DefaultComponent,
children:[{path:'dashboard',component:DashboardComponent},
{path:'new-category-list',component:NewProductCategoryListComponent},
            {path:'products',component:ProductsComponent,children:[{
              path:'new-product',component:NewProductComponent
            }
            ]} ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
