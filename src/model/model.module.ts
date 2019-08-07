import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, Cart, Order, OrderRepository, RestDataSource, AuthService,
    { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ModelModule {}
