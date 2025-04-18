import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sale.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  debugger: any
  private baseUrl = 'https://localhost:44369/api/Sales/';

  constructor(private http: HttpClient) {}

  recordSale(sale: Sale): Observable<any> {
    return this.http.post(this.baseUrl + 'RecordSale', sale);
  }
}
