import { Component } from '@angular/core';
import { topLists } from 'src/interfaces/topList';

@Component({
  selector: 'app-zoommer-header',
  templateUrl: './zoommer-header.component.html',
  styleUrls: ['./zoommer-header.component.scss'],
})
export class ZoommerHeaderComponent {
  topList: topLists[] = [
    { aboutList: 'სავაჭრო პოლიტიკა' },
    { aboutList: 'განვადება' },
    { aboutList: 'კარიერა' },
    { aboutList: 'Trade In' },
    { aboutList: 'ფილიალები' },
  ];
  listTracker(list) {
    return list.aboutList;
  }
}
