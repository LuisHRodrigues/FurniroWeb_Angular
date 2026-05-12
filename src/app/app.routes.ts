import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
];
