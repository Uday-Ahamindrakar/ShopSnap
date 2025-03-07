import { Component, Input, OnInit } from '@angular/core';
import { DashboardProductService } from '../../../Service/dashboard-product.service';
import { ProductList } from '../../../Service/productList';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  constructor(private productDasboardService: DashboardProductService) {}

  products: ProductList[] = [];

  ngOnInit(): void {
    this.productDasboardService.getAllProducts();
    this.productDasboardService.productList$.subscribe((data) => {
      this.products = data;
    });
  }

  // @Input() products: {
  //   product_imageUrl: string;
  //   product_title: string;
  //   product_description: string;
  //   product_price: number;
  // }[] = [];
  // @Input() product: Product[] = [];
}
