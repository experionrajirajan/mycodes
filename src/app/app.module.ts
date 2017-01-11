import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListService } from './product-list.service';
import { AddProductComponent } from './products/add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { routes } from './app.router';
import { ForpassingService } from './forpassing.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AddProductComponent,
    HomepageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes

  ],
  providers: [ProductListService,ForpassingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
