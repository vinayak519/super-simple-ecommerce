import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { FooterComponent } from './core/footer/footer.component';
import { RoutingModule } from './router.module';
import { ProductListComponent } from './store/product-list/product-list.component';
import { ProductService } from './shared/products.service';
import { StoreService } from './store/store.service';
import { ProductComponent } from './store/product/product.component';
import { StoreComponent } from './store/store.component';
import { CartService } from './shared/cart.service';
import { CartComponent } from './store/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    StoreComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    StoreService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
