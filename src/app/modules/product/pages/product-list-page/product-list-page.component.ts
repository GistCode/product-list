import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.interface';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductAddDialogComponent } from '../../components/product-add-dialog/product-add-dialog.component';


@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {
  products: Product[];

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.products = this.activatedRoute.snapshot.data.productResults as Product[];
  }

  addProduct() {
    let dialogRef = this.dialog.open(ProductAddDialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.products.push(result);
      }
    });
  }

}
