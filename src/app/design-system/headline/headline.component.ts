import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit{
  @Input() public message = "";

  constructor(){}

  ngOnInit(): void {
    
  }
}
