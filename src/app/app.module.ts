import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    PromocionesComponent,
    NewsletterComponent,
    HomeComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
