import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './Dashboard/Components/main-dashboard/main-dashboard.component';
import { CheckoutComponent } from './Dashboard/Components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: MainDashboardComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
