import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TravelCardComponent } from './components/travel-card/travel-card.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AboutComponent } from './views/about/about.component';
import { SellComponent } from './views/sell/sell.component';
import { LandingComponent } from './views/landing/landing.component';
import { MaterialModule } from 'src/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravelCardComponent,
    TicketsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    SellComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
