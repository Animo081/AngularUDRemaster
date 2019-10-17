import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from "../../service/user/authentication.service";
import { User } from "../../wrappers/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  private userReactiveForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {

    this.initForm();

    if (this.authenticationService.isAuthorized()) {
      this.authenticationService.getCurrentUser().subscribe((data: User) => {
        this.userReactiveForm.patchValue(data);
      });
    }
  }

  private initForm() {
    this.userReactiveForm = this.formBuilder.group({
      username: [],
      email: [],
      description: []
    });
  }

  public submit() {
    this.authenticationService.updateUserData(this.userReactiveForm.value).subscribe(
      data => this.snackBar.open("All Changes Saved", null, { duration: 2000 }),
      error => console.error(error)
    );
  }

  public signOut() {
    this.authenticationService.signOut();
  }
}
