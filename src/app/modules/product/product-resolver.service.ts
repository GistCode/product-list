import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './product.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService
  implements Resolve<Observable<Product | Product[] | string>> {
  constructor(private productService: ProductService) { }

  resolve(
    activatedRoute: ActivatedRouteSnapshot
  ): Observable<Product | Product[] | string> {
    if (activatedRoute.params.id) {
      return this.productService
        .getProductDetails(activatedRoute.params.id)
        .pipe(catchError((error: string) => of(error)));
    } else {
      return this.productService
        .getProductList()
        .pipe(catchError((error: string) => of(error)));
    }

  }
}
