import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

@Injectable()
export class LoginComponent {

  private login: string;
  private password: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
  ) {}

  public signIn(){

    this.userService.signIn(this.login, this.password).subscribe((data:number) => {
      localStorage.setItem("userId", data.toString());
      this.router.navigate([{ outlets: { primary: ['main','files'], sidebar: ['sidebar','user'] }}]);
    }, error => console.error(error));
  }

  public signUp() {
    this.router.navigate([{ outlets: { sidebar: ['sidebar','register'] }}]);
  }
}
