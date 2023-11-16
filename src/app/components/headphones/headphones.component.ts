import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit{
  constructor( private router: Router){ }

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
      if (event instanceof NavigationEnd){
        window.scrollTo(0, 0)
      }
    })
  }
}
