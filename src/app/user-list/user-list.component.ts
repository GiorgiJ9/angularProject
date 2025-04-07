import { Component } from '@angular/core';
import { UserList } from 'src/interfaces/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList: UserList[] = [
    { name: 'ბექა უნგიაძე', id: 1 },
    { name: 'ანრი წოწონავა', id: 2 },
    { name: 'ალექს მატარაძე', id: 3 },
    { name: 'ნატალი შანავა', id: 4 },
    { name: 'გიორგი ჯინჭარაშვილი', id: 5 },
    { name: 'შალვა მინდორაშვილი', id: 6 },
    { name: 'დავით შარაშენიძე', id: 7 },
  ];
  // filterArray = this.userList.filter((value) => value.id > 3);
  changeUserList() {
    // this.userList.push({name:'ახალი მომხმარებელი', id:99})
    this.userList = [
      { name: 'ბექა ბექა', id: 11 },
      { name: 'ანრი წოწონავა', id: 2 },
      { name: 'ალექს მატარაძე', id: 3 },
      { name: 'ნატალი შანავა', id: 4 },
      { name: 'გიორგი ჯინჭარაშვილი', id: 5 },
      { name: 'შალვა მინდორაშვილი', id: 6 },
      { name: 'დავით შარაშენიძე', id: 7 },
    ];
  }
  // trackUserList(user) {
  //   return user.id;
  // }
}
