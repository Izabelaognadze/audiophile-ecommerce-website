import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input () public firstImgMob = "";
  @Input () public firstImgTab = "";
  @Input () public firstImgDes = "";

  @Input () public secondImgMob = "";
  @Input () public secondImgTab = "";
  @Input () public secondImgDes = "";

  @Input () public thirdImgMob = "";
  @Input () public thirdImgTab = "";
  @Input () public thirdImgDes = "";
}
