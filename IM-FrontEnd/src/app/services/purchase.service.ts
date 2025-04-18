import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../models/purchase.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'https://localhost:44369/api/Purchases/';

  constructor(private http: HttpClient) {}

  recordPurchase(purchase: Purchase): Observable<any> {
    return this.http.post(this.baseUrl + 'RecordPurchase', purchase);
  }
}
