import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model'; 

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product; 
  @Output() remove = new EventEmitter<number>(); 


  like() {
    this.product.likes++; 
  }

  delete() {
    console.log('Кнопка нажата для ID:', this.product.id); 
    this.remove.emit(this.product.id); 
  }

  share(platform: string) {
    const message = encodeURIComponent(`Посмотри на Kaspi: ${this.product.link}`);
    const url = platform === 'wa' 
      ? `https://wa.me/?text=${message}` 
      : `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}