import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {
  products: Product[] = [];
  sale: Sale = { productId: 0, quantitySold: 0 };

  constructor(private productService: ProductService, private saleService: SaleService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(p => this.products = p);
  }

  type = 'Sale';
  model = { productId: 0, quantity: 0 };

  submitForm() {
    debugger
    this.saleService.recordSale({
      productId: this.model.productId,
      quantitySold: this.model.quantity
    }).subscribe(() => {
      this.snackBar.open('Sale recorded successfully!', 'Close', { duration: 3000 });
      this.model = { productId: 0, quantity: 0 };
    });
  }

}
