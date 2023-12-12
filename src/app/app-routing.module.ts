import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {HeadphonesComponent} from "./components/headphones/headphones.component"
import {EarphonesComponent} from './components/earphones/earphones.component'
import {SpeakersComponent} from './components/speakers/speakers.component'
import {Xx99MarkTwoHeadphonesComponent} from './components/headphones/xx99-mark-two-headphones/xx99-mark-two-headphones.component'
import {Xx99MarkOneHeadphonesComponent} from './components/headphones/xx99-mark-one-headphones/xx99-mark-one-headphones.component'
import {Xx59HeadphonesComponent} from './components/headphones/xx59-headphones/xx59-headphones.component'
import {Zx7SpeakerComponent} from './components/speakers/zx7-speaker/zx7-speaker.component'
import {Zx9SpeakerComponent} from './components/speakers/zx9-speaker/zx9-speaker.component'
import {Yx1EarphonesComponent} from './components/earphones/yx1-earphones/yx1-earphones.component'
import {CheckoutComponent} from './components/checkout/checkout.component'


const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"headphones",component:HeadphonesComponent, children:
    [
      {
        path:"xx99-mark-two-headphones", component: Xx99MarkTwoHeadphonesComponent
      },
      {
        path:"xx99-mark-one-headphones",component:Xx99MarkOneHeadphonesComponent
      },
      {
        path:"xx59-headphones",component:Xx59HeadphonesComponent
      },
    ]
  },
  {
    path:"earphones",component:EarphonesComponent, children:
    [
      {
        path:"yx1-earphones",component:Yx1EarphonesComponent
      }
    ]
  },
  {
    path:"speakers",component:SpeakersComponent, children:
    [
      {
        path:"zx9-speaker",component:Zx9SpeakerComponent
      },
      {
        path:"zx7-speaker",component:Zx7SpeakerComponent
      }
    ]
  },
  {
    path:"checkout",component: CheckoutComponent
  }
]
// const routes: Routes = [
//   {
//     path: "",
//     children: [
//       {
//         path:"", component: HomeComponent
//       },
//       {
//         path:"headphones/xx99-mark-two-headphones",component:Xx99MarkTwoHeadphonesComponent
//       },
//       {
//         path:"headphones/xx99-mark-one-headphones",component:Xx99MarkOneHeadphonesComponent
//       },
//       {
//         path:"headphones/xx59-headphones",component:Xx59HeadphonesComponent
//       },
//       {
//         path:"headphones",component:HeadphonesComponent
//       },
//       {
//         path:"earphones/yx1-earphones",component:Yx1EarphonesComponent
//       },
//       {
//         path:"earphones",component:EarphonesComponent
//       },
//       {
//         path:"speakers/zx9-speaker",component:Zx9SpeakerComponent
//       },
//       {
//         path:"speakers/zx7-speaker",component:Zx7SpeakerComponent
//       },
//       {
//         path:"speakers",component:SpeakersComponent
//       },
//       {
//         path:"checkout",component: CheckoutComponent
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
