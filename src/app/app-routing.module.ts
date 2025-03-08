import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './Dashboard/Components/main-dashboard/main-dashboard.component';
import { CheckoutComponent } from './Dashboard/Components/checkout/checkout.component';
import { DisplayProductComponent } from './Dashboard/Components/display-product/display-product.component';

const routes: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'orders',
    component: DisplayProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
