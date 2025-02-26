import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface.';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgIf, NgClass],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    inStock: false,
    onSale: false,
    imgURL: '',
  };
  @Input() isSelected: boolean = false;

  @Output() productSelected = new EventEmitter<Product>();

  onSelected(): void {
    this.productSelected.emit(this.product);
  }
}
