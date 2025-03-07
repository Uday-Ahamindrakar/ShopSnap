import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './Dashboard/Components/main-dashboard/main-dashboard.component';
import { provideHttpClient } from '@angular/common/http';
// #####################  Material imports  #####################
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductCardComponent } from './Dashboard/Components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [AppComponent, MainDashboardComponent, ProductCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [provideClientHydration(withEventReplay()), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
