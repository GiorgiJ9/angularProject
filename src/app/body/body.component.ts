import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  changeNumber: number = 0;
  forIncreace(numb: number) {
    numb = this.changeNumber++;
  }
  forDecreace(numb: number) {
    numb = this.changeNumber--;
  }
  newStr: string = '';
  reset() {
    this.changeNumber = 0;
  }
  clear() {
    this.newStr = '';
  }
}
