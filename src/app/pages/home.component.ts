import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { BannerComponent } from '../components/banner/banner.component';
import { AboutComponent } from '../components/about/about.component';
import { ProductsComponent } from "../components/products/products.component";
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';


@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <app-banner></app-banner>
    <app-about></app-about>
    <app-products></app-products>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  standalone: true,
  imports: [
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    ContactComponent,
],
})
export class HomeComponent {}
