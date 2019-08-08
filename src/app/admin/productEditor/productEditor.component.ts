import { Component } from '@angular/core';
import { Product } from 'src/model/product.model';
import { ProductRepository } from 'src/model/product.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'productEditor.component.html'
})
export class ProductEditorComponent {
  editing = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
    // if you check the admin module you will see that :mode and :id are considered params there
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product, repository.getProduct(Number.parseInt(activeRoute.snapshot.params['id'])));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
