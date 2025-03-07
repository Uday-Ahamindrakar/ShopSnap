import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductList } from './productList';

@Injectable({
  providedIn: 'root',
})
export class DashboardProductService {
  constructor(private http: HttpClient) {}

  productApi: string = 'http://localhost:8080/api/products/';

  private productSubject = new BehaviorSubject<ProductList[]>([]);
  productList$ = this.productSubject.asObservable();

  getAllProducts() {
    this.http.get<ProductList[]>(this.productApi).subscribe((data) => {
      // console.log('Product data');
      // console.log(data);

      this.productSubject.next(data);
    });
  }
}
