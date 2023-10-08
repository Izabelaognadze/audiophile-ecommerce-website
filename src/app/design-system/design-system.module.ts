import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline/headline.component';
import { ShopButtonComponent } from './shop-button/shop-button.component';
import { BestGearComponent } from './best-gear/best-gear.component';

@NgModule({
  declarations: [
    HeadlineComponent,
    ShopButtonComponent,
    BestGearComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadlineComponent,
    ShopButtonComponent,
    BestGearComponent,
    
  ]
})
export class DesignSystemModule { }
