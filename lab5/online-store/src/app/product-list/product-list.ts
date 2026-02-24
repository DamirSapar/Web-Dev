import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item'; 

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  standalone: true, 
})
export class ProductList {
  @Input() products: Product[] = []; 

  onRemoveProduct(id: number) {
    console.log('Удаляем товар с ID:', id);

    this.products = [...this.products.filter(p => p.id !== id)];
  }
}
