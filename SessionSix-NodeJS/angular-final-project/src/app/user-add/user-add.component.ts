import { UserService } from './../services/user.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
  providers: [UserService]
})
export class UserAddComponent implements OnInit {

  submitted: boolean = false;
  userForm: FormGroup;
  user: User = new User();

  constructor(private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router) {
    this.userForm = this._formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.user = {
      name: '',
      city: ''
    }
  }


  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.user);
    this._userService.addUser(this.user).subscribe((result) => {
      console.log('User Added Successfully.');
      console.log(result);
      this._router.navigateByUrl('/users');
    }, (errors) => console.log(errors))
  }

}
