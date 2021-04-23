import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((result) => {
      this.userList = result;
      console.log(this.userList)
    }, (error) => { console.log(error); })
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((result) => {
      console.log('Deleting User Successfully.');
      console.log(result);
      this.loadUsers();
    }, (error) => console.log(error));
  }

}
