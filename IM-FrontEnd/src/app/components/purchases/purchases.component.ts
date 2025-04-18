import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Purchase } from 'src/app/models/purchase.model';
import { PurchaseService } from 'src/app/services/purchase.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html'
})
export class PurchasesComponent implements OnInit {
  products: Product[] = [];
  purchase: Purchase = { productId: 0, quantityPurchased: 0 };

  constructor(private productService: ProductService, private purchaseService: PurchaseService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(p => this.products = p);
  }

  
  type = 'Purchase';
  model = { productId: 0, quantity: 0 };

submitForm() {
  this.purchaseService.recordPurchase({
    productId: this.model.productId,
    quantityPurchased: this.model.quantity
  }).subscribe(() => {
    this.snackBar.open('Purchase recorded successfully!', 'Close', { duration: 3000 });
    this.model = { productId: 0, quantity: 0 };
  });
}

}
