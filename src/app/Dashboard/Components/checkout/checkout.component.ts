import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardProductService } from '../../../Service/dashboard-product.service';
import { ProductList } from '../../../Service/productList';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  constructor(private productService: DashboardProductService) {}
  productList: ProductList[] = [];
  ngOnInit(): void {
    this.productService.getAllProducts();
    this.productService.productList$.subscribe((data) => {
      this.productList = data;
    });
  }

  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
