import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy, formatNumber } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadphonesComponent } from './components/headphones/headphones.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { EarphonesComponent } from './components/earphones/earphones.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DesignSystemModule } from './design-system/design-system.module';
import { Xx99MarkTwoHeadphonesComponent } from './components/headphones/xx99-mark-two-headphones/xx99-mark-two-headphones.component';
import { Xx99MarkOneHeadphonesComponent } from './components/headphones/xx99-mark-one-headphones/xx99-mark-one-headphones.component';
import { Xx59HeadphonesComponent } from './components/headphones/xx59-headphones/xx59-headphones.component';
import { Zx9SpeakerComponent } from './components/speakers/zx9-speaker/zx9-speaker.component';
import { Zx7SpeakerComponent } from './components/speakers/zx7-speaker/zx7-speaker.component';
import { Yx1EarphonesComponent } from './components/earphones/yx1-earphones/yx1-earphones.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { CheckoutComponent } from './components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadphonesComponent,
    SpeakersComponent,
    EarphonesComponent,
    HeaderComponent,
    FooterComponent,
    Xx99MarkTwoHeadphonesComponent,
    Xx99MarkOneHeadphonesComponent,
    Xx59HeadphonesComponent,
    Zx9SpeakerComponent,
    Zx7SpeakerComponent,
    Yx1EarphonesComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignSystemModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide:LocationStrategy, useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
