import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductList } from './productList';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  name: string = 'uday';

  cart = new BehaviorSubject<ProductList[]>([]);
  cartList$ = this.cart.asObservable();
}
