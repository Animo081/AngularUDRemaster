import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthenticationService } from "../../service/user/authentication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  private registerReactiveForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registerReactiveForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public submit() {
    this.authenticationService.signUp(this.registerReactiveForm.value);
  }

  public cancel() {
    this.router.navigate([{ outlets: { sidebar: ['sidebar','login'] }}]);
  }
}
