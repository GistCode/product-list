import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'api/products/';
  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}`).pipe(map(response => response as Product[]));
  }

  getProductDetails(id: string): Observable<Product> {
    return this.http.get(`${this.baseUrl}${id}`).pipe(map(response => response as Product));
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}`, product as Product);
  }
}
