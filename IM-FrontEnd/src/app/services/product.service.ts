import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  debugger: any;
  private baseUrl = 'https://localhost:44369/api/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    debugger
    return this.http.get<Product[]>(this.baseUrl + 'Products/GetAll');
    
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl + 'Products/GetById'}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'Products/Create', product);
  }

  updateProduct(product: Product): Observable<void> {
    return this.http.put<void>(`${this.baseUrl + 'Products/Update'}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl+ 'Products/Delete'}/${id}`);
  }
}
