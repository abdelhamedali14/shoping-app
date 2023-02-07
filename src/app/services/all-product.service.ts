import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AllProductService {
  baseUrl: string =
    'https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products';
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(this.baseUrl);
  }
  getProductDetails(productId: number) {
    return this.http.get(`${this.baseUrl}/${productId}`);
  }
}
