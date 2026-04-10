import { Routes } from '@angular/router';
import { HomePageComponent } from './Landing/home-page/home-page.component';
import { AboutUsComponent } from './Landing/about-us/about-us.component';
import { ProductsComponent } from './Landing/products/products.component';
import { ContactUsComponent } from './Landing/contact-us/contact-us.component';
import { CartComponent } from './Landing/cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'cart', component: CartComponent }

];
