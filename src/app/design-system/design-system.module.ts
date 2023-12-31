import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline/headline.component';
import { ShopButtonComponent } from './shop-button/shop-button.component';
import { BestGearComponent } from './best-gear/best-gear.component';
import { ItemsComponent } from './items/items.component';
import { MayAlsoLikeComponent } from './may-also-like/may-also-like.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ItemChekoutComponent } from './item-chekout/item-chekout.component';
import { ItemFeaturesComponent } from './item-features/item-features.component';
import { RouterModule } from '@angular/router';
import { ItemInTheBoxComponent } from './item-in-the-box/item-in-the-box.component';
import { CardToggleComponent } from './card-toggle/card-toggle.component';

@NgModule({
  declarations: [
    HeadlineComponent,
    ShopButtonComponent,
    BestGearComponent,
    ItemsComponent,
    MayAlsoLikeComponent,
    GalleryComponent,
    ItemChekoutComponent,
    ItemFeaturesComponent,
    ItemInTheBoxComponent,
    CardToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeadlineComponent,
    ShopButtonComponent,
    BestGearComponent,
    ItemsComponent,
    MayAlsoLikeComponent,
    GalleryComponent,
    ItemChekoutComponent,
    ItemFeaturesComponent,
    ItemInTheBoxComponent,
    CardToggleComponent,
  ]
})
export class DesignSystemModule { }
