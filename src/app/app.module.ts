import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeadphonesComponent } from './components/headphones/headphones.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { EarphonesComponent } from './components/earphones/earphones.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadlineComponent } from './design-system/headline/headline.component';
import { DesignSystemModule } from './design-system/design-system.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadphonesComponent,
    SpeakersComponent,
    EarphonesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
