import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { ProductList } from './productList';

@Injectable({
  providedIn: 'root',
})
export class DashboardProductService {
  constructor(private http: HttpClient) {}

  productApi: string = 'http://localhost:8080/api/products/';

  private productSubject = new BehaviorSubject<ProductList[]>([]); // getting all products to display and the data is also changing in this productSubject
  productList$ = this.productSubject.asObservable();

  displayProductSubject = new ReplaySubject<ProductList>(1); // get only one product to display
  displayProduct$ = this.displayProductSubject.asObservable();

  getAllProducts() {
    this.http.get<ProductList[]>(this.productApi).subscribe((data) => {
      // console.log('Product data');
      // console.log(data);

      this.productSubject.next(data);
    });
  }
}
