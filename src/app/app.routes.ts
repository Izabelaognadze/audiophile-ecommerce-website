import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { Xx99MarkTwoHeadphonesComponent } from './headphones/xx99-mark-two-headphones/xx99-mark-two-headphones.component';
import { Xx99MarkOneHeadphonesComponent } from './headphones/xx99-mark-one-headphones/xx99-mark-one-headphones.component';
import { Xx59HeadphonesComponent } from './headphones/xx59-headphones/xx59-headphones.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { Yx1EarphonesComponent } from './earphones/yx1-earphones/yx1-earphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { Zx9SpeakerComponent } from './speakers/zx9-speaker/zx9-speaker.component';
import { Zx7SpeakerComponent } from './speakers/zx7-speaker/zx7-speaker.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'headphones',
    component: HeadphonesComponent,
    children: [
      {
        path: 'xx99-mark-two-headphones',
        component: Xx99MarkTwoHeadphonesComponent,
      },
      {
        path: 'xx99-mark-one-headphones',
        component: Xx99MarkOneHeadphonesComponent,
      },
      {
        path: 'xx59-headphones',
        component: Xx59HeadphonesComponent,
      },
    ],
  },
  {
    path: 'earphones',
    component: EarphonesComponent,
    children: [
      {
        path: 'yx1-earphones',
        component: Yx1EarphonesComponent,
      },
    ],
  },
  {
    path: 'speakers',
    component: SpeakersComponent,
    children: [
      {
        path: 'zx9-speaker',
        component: Zx9SpeakerComponent,
      },
      {
        path: 'zx7-speaker',
        component: Zx7SpeakerComponent,
      },
    ],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
