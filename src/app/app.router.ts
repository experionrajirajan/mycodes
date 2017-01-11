import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddProductComponent } from './products/add-product/add-product.component';


export const router: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'add-product', component: AddProductComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);