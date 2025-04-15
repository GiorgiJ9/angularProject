import { Component } from '@angular/core';
import { UserList } from 'src/interfaces/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList: UserList[] = [
    { name: 'ბექა უნგიაძე', id: 1, description: 'step ლექტორი' },
    { name: 'ანრი წოწონავა', id: 2, description: 'step სტუდენტი' },
    { name: 'ალექს მატარაძე', id: 3, description: 'step სტუდენტი' },
    { name: 'ნატალი შანავა', id: 4, description: 'step სტუდენტი' },
    { name: 'გიორგი ჯინჭარაშვილი', id: 5, description: 'step სტუდენტი' },
    { name: 'შალვა მინდორაშვილი', id: 6, description: 'step სტუდენტი' },
    { name: 'დავით შარაშენიძე', id: 7, description: 'step სტუდენტი' },
  ];
  // filterArray = this.userList.filter((value) => value.id > 3);
  changeUserList() {
    // this.userList.push({name:'ახალი მომხმარებელი', id:99})
    this.userList = [
      { name: 'ბექა ბექა', id: 11, description: 'step ლექტორი' },
      { name: 'ანრი წოწონავა', id: 2, description: 'step სტუდენტი' },
      { name: 'ალექს მატარაძე', id: 3, description: 'step სტუდენტი' },
      { name: 'ნატალი შანავა', id: 4, description: 'step სტუდენტი' },
      { name: 'გიორგი ჯინჭარაშვილი', id: 5, description: 'step სტუდენტი' },
      { name: 'შალვა მინდორაშვილი', id: 6, description: 'step სტუდენტი' },
      { name: 'დავით შარაშენიძე', id: 7, description: 'step სტუდენტი' },
    ];
  }
  trackUserList(user) {
    return user.id;
  }
}
