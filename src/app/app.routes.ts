import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category/:category',
    component: CategoriesComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
