import { Component } from '@angular/core';
import { sideBarList } from 'src/interfaces/sideBarList';

@Component({
  selector: 'app-zoommer-side-bar',
  templateUrl: './zoommer-side-bar.component.html',
  styleUrls: ['./zoommer-side-bar.component.scss'],
})
export class ZoommerSideBarComponent {
  sideBarList: sideBarList[]=[
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg', name:'მობილურები'},
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Tablet-05.svg', name:'ტაბები'},
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_IT.svg', name:'ლეპტოპები | IT'},
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_smart%20house.svg', name:'სმარტ გაჯეტები'},
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_speaker.svg', name:'აუდიო სისტემა'},
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Joystick%203.svg', name:'Gaming'},
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_TV.svg', name:'TV | მონიტორები'},
    {img:'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_photo%20camera.svg', name:'ფოტო | ვიდეო'},
  ];
}
