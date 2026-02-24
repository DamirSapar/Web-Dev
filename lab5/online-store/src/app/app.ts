import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { ProductsService } from './products';
import { Category, Product } from './models/product.model';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private productsService = inject(ProductsService);

  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Часы' },
    { id: 4, name: 'Наушники' }
  ];

  selectedCategoryId: number | null = null;

  get filteredProducts(): Product[] {
    if (!this.selectedCategoryId) return [];
    return this.productsService.getProducts().filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }


}
