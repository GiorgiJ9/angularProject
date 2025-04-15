import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar-details',
  templateUrl: './side-bar-details.component.html',
  styleUrls: ['./side-bar-details.component.scss'],
})
export class SideBarDetailsComponent {
  @Input() imageData;
  @Output() emitImgUrl = new EventEmitter<boolean>();
  hasImgUrl: boolean = false;
  checkImg() {
    this.hasImgUrl = this.imageData.imgUrl !== null ? true : false;
    this.emitImgUrl.emit(this.hasImgUrl);
    console.log(this.hasImgUrl);
  }
}