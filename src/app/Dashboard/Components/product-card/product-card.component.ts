import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() products: {
    product_imageUrl: string;
    product_title: string;
    product_description: string;
    product_price: number;
  }[] = [];
  // @Input() product: Product[] = [];
}
