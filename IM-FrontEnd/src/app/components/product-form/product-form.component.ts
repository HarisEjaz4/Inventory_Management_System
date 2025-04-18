import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  product: Product = { name: '', description: '', quantity: 0 };
  isEditMode = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    debugger
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productService.getById(+id).subscribe(p => this.product = p);
    }
  }

  saveProduct() {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product).subscribe(() => this.router.navigate(['/products']));
    } else {
      this.productService.addProduct(this.product).subscribe(() => this.router.navigate(['/products']));
    }
  }
}
