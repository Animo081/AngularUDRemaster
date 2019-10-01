import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { User } from "../../wrappers/user";
import { UserService } from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  private userForm: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {

    if (localStorage.getItem("userId") == null){
      this.router.navigate([{ outlets: { primary: ['main','welcome'], sidebar: ['sidebar','login'] }}]);
    } else {
      this.userService.getUser().subscribe((data: User) => {
        this.userForm.get("username").setValue(data.username);
        this.userForm.get("email").setValue(data.email);
        this.userForm.get("description").setValue(data.description);
      });
    }
  }

  public submitForm(formGroup: FormGroup) {

    this.userService.updateUserData(
      new User(
        parseInt(localStorage.getItem("userId")),
      formGroup.value.username,
      formGroup.value.email,
      formGroup.value.description
    ))
  }

  public Logout() {
    localStorage.removeItem("userId");
    window.location.reload();
  }
}
