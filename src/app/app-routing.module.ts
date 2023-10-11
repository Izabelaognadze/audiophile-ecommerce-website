import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {HeadphonesComponent} from "./components/headphones/headphones.component"
import {EarphonesComponent} from './components/earphones/earphones.component'
import {SpeakersComponent} from './components/speakers/speakers.component'
import {Xx99MarkTwoHeadphonesComponent} from './components/headphones/xx99-mark-two-headphones/xx99-mark-two-headphones.component'

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path:"", component: HomeComponent
      },
      {
        path:"headphones/xx99-mark-two-headphones",component:Xx99MarkTwoHeadphonesComponent
      },
      {
        path:"headphones",component:HeadphonesComponent
      },
      {
        path:"earphones",component:EarphonesComponent
      },
      {
        path:"speakers",component:SpeakersComponent
      },
    ]
  }

  // {
  //   path:"", component: HomeComponent
  // },
  // {
  //   path:"headphones",component:HeadphonesComponent, children:
  //   [
  //     {
  //       path:"xx99-mark-two-headphones", component: Xx99MarkTwoHeadphonesComponent
  //     },
  //   ]
  // },
  // {
  //   path:"earphones",component:EarphonesComponent
  // },
  // {
  //   path:"speakers",component:SpeakersComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
