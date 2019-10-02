import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../product.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    title: '',
    sku: '',
    description: '',
    category: []
  };
  @Input() readOnly = false;

  productForm: FormGroup;
  constructor() {
  }

  ngOnInit() {

    this.productForm = new FormGroup({
      title: new FormControl(this.product.title, [Validators.required, Validators.minLength(10)]),
      sku: new FormControl(this.product.sku, [Validators.required]),
      description: new FormControl(this.product.description),
      category: new FormControl(this.product.category)
    });

    if (this.readOnly) {
      this.productForm.disable();
    }
  }

}
