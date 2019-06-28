import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { OfertaComponent } from './components/oferta/oferta.component';

import { SafePipe } from './components/oferta/safe.pipe';
import { ReferenceComponent } from './components/reference/reference.component';


import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    OfertaComponent,
    SafePipe,
    ReferenceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
