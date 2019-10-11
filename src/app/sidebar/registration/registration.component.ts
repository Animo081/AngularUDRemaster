import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {UserService} from "../../service/user.service";
import {resolve} from "url";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // TODO: use ReactiveForm
  private login: string;
  private password: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {}

  // TODO: method should start from lowerCase
  public Submit() {
    this.userService.signUp(this.login, this.password);
  }

  // TODO: method should start from lowerCase
  public Cancel() {
    this.router.navigate([{ outlets: { sidebar: ['sidebar','login'] }}]);
  }
}
