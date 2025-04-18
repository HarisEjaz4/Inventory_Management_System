import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  columnsToDisplay: string[] = ['name', 'description', 'quantity', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    debugger
    this.productService.getProducts().subscribe({
      
      next: (data) => {
        console.log('Products:', data);  // Make sure this logs the data
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
    }
  }
}
