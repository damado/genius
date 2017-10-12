import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, FormBuilder, ControlContainer, ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './components/app/app.component';
import { CarouselModule } from 'ngx-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HomeComponent } from './components/home/home.component';
import { ListaIconosComponent } from './components/lista-iconos/lista-iconos.component';
import { DetallePromocionComponent } from './components/detalle-promocion/detalle-promocion.component';
import { FinanciacionComponent } from './components/financiacion/financiacion.component';
//Services
import { PromocionService } from './services/promocion.service';
import { SuscripcionService } from './services/suscripcion.service';
import { ContactoService } from './services/contacto.service';

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
    HomeComponent,
    ListaIconosComponent,
    DetallePromocionComponent,
    FinanciacionComponent,
  ],
  imports: [
    AppRouting,
    BrowserModule,
    CarouselModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PromocionService, SuscripcionService, FormBuilder, ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
