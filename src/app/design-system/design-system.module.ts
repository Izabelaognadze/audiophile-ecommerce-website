import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline/headline.component';
import { ShopButtonComponent } from './shop-button/shop-button.component';
import { BestGearComponent } from './best-gear/best-gear.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    HeadlineComponent,
    ShopButtonComponent,
    BestGearComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadlineComponent,
    ShopButtonComponent,
    BestGearComponent,
    ItemsComponent,
  ]
})
export class DesignSystemModule { }
