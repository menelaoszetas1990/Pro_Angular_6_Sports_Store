import { Component } from '@angular/core';
import { OrderRepository } from 'src/model/order.repository';
import { Order } from 'src/model/order.model';

@Component({
  templateUrl: 'orderTable.component.html'
})
export class OrderTableComponent {
  includeShipped = false;

  constructor(private repository: OrderRepository) {}

  getOrders(): Order[] {
    const _orders = this.repository.getOrders().filter(o => this.includeShipped || !o.shipped);
    return _orders;
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }
}
