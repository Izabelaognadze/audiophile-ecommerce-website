import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit{
  constructor (private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0);
      }
    })
  }
}
