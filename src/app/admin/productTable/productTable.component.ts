import { Component } from '@angular/core';
import { ProductRepository } from 'src/model/product.repository';
import { Product } from 'src/model/product.model';

@Component({
  templateUrl: 'productTable.component.html'
})
export class ProductTableComponent {
  constructor(private repository: ProductRepository) {}

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
