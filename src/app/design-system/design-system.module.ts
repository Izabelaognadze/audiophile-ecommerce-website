import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline/headline.component';
import { ShopButtonComponent } from './shop-button/shop-button.component';

@NgModule({
  declarations: [
    HeadlineComponent,
    ShopButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadlineComponent,
    ShopButtonComponent,
  ]
})
export class DesignSystemModule { }
