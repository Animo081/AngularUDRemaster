import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import {AuthenticationService} from "../../service/user/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
@Injectable()
export class LoginComponent implements OnInit {

  private loginReactiveForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.loginReactiveForm = this.formBuilder.group({
      login: [],
      password: []
    });
  }

  public signIn() {

    let login = this.loginReactiveForm.value["login"];
    let password = this.loginReactiveForm.value["password"];

    this.authenticationService.signIn(login, password)
  }

  public signUp() {
    this.router.navigate([{ outlets: { sidebar: ['sidebar','register'] }}]);
  }
}
