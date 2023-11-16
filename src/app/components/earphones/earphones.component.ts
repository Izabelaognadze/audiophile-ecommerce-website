import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-earphones',
  templateUrl: './earphones.component.html',
  styleUrls: ['./earphones.component.css']
})
export class EarphonesComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0)
      }
    })
  }
}
