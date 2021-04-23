import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {

  id: String;
  user: User = new User();

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params.id;
    this._userService.getUserById(this.id).subscribe((result) => {
      console.log(result);
      this.user = result;
    }, (error) => { console.log(error) })


  }

}
