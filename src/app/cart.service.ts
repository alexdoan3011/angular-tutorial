import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: { id: number; name: string; price: number; description: string; }[] = [];
  constructor(
      private http: HttpClient
  ) { }
  addToCart(product: { id: number; name: string; price: number; description: string; }) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
