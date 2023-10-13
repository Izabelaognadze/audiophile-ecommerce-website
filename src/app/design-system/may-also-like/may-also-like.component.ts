import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-may-also-like',
  templateUrl: './may-also-like.component.html',
  styleUrls: ['./may-also-like.component.css']
})
export class MayAlsoLikeComponent {
  @Input() public img="";
  @Input() public title="";
  @Input() public linkTo="";

}
