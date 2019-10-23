import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import {AuthenticationService} from "../../service/user/authentication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private registerReactiveForm: FormGroup;

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
    this.registerReactiveForm = this.formBuilder.group({
      login: [],
      password: []
    });
  }

  public submit() {

    let login = this.registerReactiveForm.value["login"];
    let password = this.registerReactiveForm.value["password"];

    /*  TODO: don't forget */
    this.authenticationService.signUp(login, password);
  }

  public cancel() {
    this.router.navigate([{ outlets: { sidebar: ['sidebar','login'] }}]);
  }
}
