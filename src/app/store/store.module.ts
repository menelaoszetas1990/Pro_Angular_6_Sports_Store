import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { ModelModule } from 'src/model/model.module';
import { CounterDirective } from './directives/counter.directive';
import { CartSummaryComponent } from './cartSummary/cartSummary.component';
import { CartDetailComponent } from './cartDetail/cartDetail.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule {}
