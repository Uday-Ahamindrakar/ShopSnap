import { Component, OnInit } from '@angular/core';
import { DashboardProductService } from '../../../Service/dashboard-product.service';
import { ProductList } from '../../../Service/productList';
import { CartService } from '../../../Service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-product',
  standalone: false,
  templateUrl: './display-product.component.html',
  styleUrl: './display-product.component.css',
})
export class DisplayProductComponent implements OnInit {
  constructor(
    private productService: DashboardProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  product: ProductList = {
    product_imageUrl: '',
    product_title: '',
    product_description: '',
    product_price: 0,
  };

  ngOnInit(): void {
    this.productService.displayProduct$.subscribe((data) => {
      this.product = data;
      // console.log(this.product);
    });
  }

  addToCartCART() {
    const newProduct: ProductList = this.product;
    const currentCart = this.cartService.cart.value;
    const updatedCart = [...currentCart, newProduct];
    this.cartService.cart.next(updatedCart);

    this.snackBar.open(`${newProduct.product_title} added to cart`, 'Close', {
      duration: 5000, // Auto close after 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-success'], // Custom styling (optional)
    });
    // this.router.navigate(['/checkout']);
  }
  addToCart() {
    const newProduct: ProductList = this.product;
    const currentCart = this.cartService.cart.value;
    const updatedCart = [...currentCart, newProduct];
    this.cartService.cart.next(updatedCart);

    this.snackBar.open(`${newProduct.product_title} added to cart`, 'Close', {
      duration: 5000, // Auto close after 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar-success'], // Custom styling (optional)
    });
    this.router.navigate(['/checkout']);
  }
}
