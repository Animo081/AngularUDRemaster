import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthenticationService } from "../../service/user/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
@Injectable()
export class LoginComponent {

  private loginReactiveForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginReactiveForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public signIn() {
    this.authenticationService.signIn(this.loginReactiveForm.value);
  }

  public signUp() {
    this.router.navigate([{ outlets: { sidebar: ['sidebar','register'] }}]);
  }
}
