import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component'
import {HeadphonesComponent} from "./components/headphones/headphones.component"
import {EarphonesComponent} from './components/earphones/earphones.component'
import {SpeakersComponent} from './components/speakers/speakers.component'

const routes: Routes = [
  {
    path:"", component: HomeComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
