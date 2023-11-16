import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-yx1-earphones',
  templateUrl: './yx1-earphones.component.html',
  styleUrls: ['./yx1-earphones.component.css']
})
export class Yx1EarphonesComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        window.scrollTo(0, 0)
      }
    })
  }
}
