import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DashboardProductService } from '../../../Service/dashboard-product.service';
import { ProductList } from '../../../Service/productList';
import { CartService } from '../../../Service/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  constructor(
    private productService: DashboardProductService,
    private cartService: CartService
  ) {}
  productList: ProductList[] = [];

  disabled: boolean = false;
  nextBcolor: boolean = true;
  total: any = 0;

  ngOnInit(): void {
    // this.productService.getAllProducts();
    // this.productService.productList$.subscribe((data) => {
    //   this.productList = data;
    // });

    this.cartService.cartList$.subscribe((data) => {
      this.productList = data;
    });

    if (this.productList.length == 0) {
      this.nextBcolor = false;
      this.disabled = true;
    } else {
      this.nextBcolor = true;
      this.disabled = false;
    }

    for (let i = 0; i < this.productList.length; i++) {
      this.total += this.productList[i].product_price;
    }
  }

  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  delectProductFromCart(index: number) {
    const removeProduct: ProductList = this.productList[index];
    const currentCart = this.cartService.cart.value;
    const updatedCart = currentCart.filter(
      (remove) => remove.product_id !== removeProduct.product_id
    );
    this.cartService.cart.next(updatedCart);
    if (this.productList.length == 0) {
      this.nextBcolor = false;
      this.disabled = true;
    } else {
      this.nextBcolor = true;
      this.disabled = false;
    }
    this.total = this.total - removeProduct.product_price;
  }
}
