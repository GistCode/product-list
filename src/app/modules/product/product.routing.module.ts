import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductResolverService } from './product-resolver.service';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductListPageComponent,
        resolve: {
          productResults: ProductResolverService
        }
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: ProductDetailsPageComponent,
        resolve: {
          productResults: ProductResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductResolverService]
})
export class ProductRoutingModule { }
