import { Component } from '@angular/core';

@Component({
  selector: 'app-zoommer-side-bar',
  templateUrl: './zoommer-side-bar.component.html',
  styleUrls: ['./zoommer-side-bar.component.scss'],
})
export class ZoommerSideBarComponent {
  sideBarList = [
    {
      name: 'მობილური',
      imgUrl:
        'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F953d77a2-d1d3-4e7f-9f46-a40081ac6552_Thumb.jpeg&w=384&q=50',
      id: 1,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Mobile.svg',
    },
    {
      name: 'ტაბები',
      imgUrl: null,
      // 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F8bc82699-d3fd-498e-99a0-ce089fbe57f1_Thumb.jpeg&w=384&q=50',
      id: 2,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Tablet-05.svg',
    },
    {
      name: 'ლეპტოპები | IT',
      imgUrl:
        'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0171989_apple-macbook-air-13-inch-2022-mlxw3lla-m2-chip-8gb256gb-ssd-space-grey-apple-m25nm-apple-8-core-gpu_550.jpeg&w=384&q=50',
      id: 3,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_IT.svg',
    },
    {
      name: 'სმარტ გაჯეტები',
      imgUrl: null,
      // 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F8dbb5969-babb-4c63-8543-062f3f421d0b_Thumb.jpeg&w=384&q=50',
      id: 4,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_smart%20house.svg',
    },
    {
      name: 'აუდიო სისტემა',
      imgUrl:
        'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F131c2778-a8a1-4d5b-9911-651cd9c2d19e_Thumb.jpeg&w=384&q=50',
      id: 5,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_speaker.svg',
    },
    {
      name: 'Gaming',
      imgUrl: null,
      // 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F9cdc6c6f-285a-4263-b1dc-92a2c09f4bd2_Thumb.png&w=384&q=50',
      id: 6,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_Joystick%203.svg',
    },
    {
      name: 'TV | მონიტორები',
      imgUrl:
        'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F98970395-a4ba-4f4f-b768-b5ba449dbf4e_Thumb.jpeg&w=384&q=50',
      id: 7,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_TV.svg',
    },
    {
      name: 'ფოტო | ვიდეო',
      imgUrl: null,
      // 'https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fsite%2F6a7f9105-518e-470b-9d7c-43d5c8d98bc9_Thumb.jpeg&w=384&q=50',
      id: 8,
      iconUrl:
        'https://zoomer-static.lemon.do/Zoomer_files/Devices_icons_V2_photo%20camera.svg',
    },
  ];
  forRenderImg;
  hasPhoto: boolean = false;
  renderImg(data) {
    this.forRenderImg = data;
  }
  listenToEmit(data: boolean) {
    this.hasPhoto = data;
  }
}