import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductService } from '../../product.service';
import { Product } from '../../product.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.css']
})
export class ProductAddDialogComponent implements OnInit {

  @ViewChild(ProductFormComponent, { static: false }) productFormComponent: ProductFormComponent;
  constructor(
    private productService: ProductService,
    public dialogRef: MatDialogRef<ProductAddDialogComponent>) { }

  ngOnInit() {
  }

  addProduct() {
    const productForm = this.productFormComponent.productForm;
    if (productForm.valid) {
      this.productService.addProduct(productForm.value as Product).subscribe(res => {
        this.dialogRef.close(res);
      });
    } else {
      // Mark as touched on button click to highlight errors
      Object.keys(productForm.controls).forEach(field => {
        const control = productForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }

  }
}
