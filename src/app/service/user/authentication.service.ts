import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { environment } from "../../../environments/environment";
import { User } from "../../wrappers/user";
import { Observable } from "rxjs";
import { LoginData } from "../../sidebar/login/shared/login-data";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  public getUserId(): number {
    return parseInt(localStorage.getItem("userId"));
  }

  public setUserId(userId: number) {
    localStorage.setItem("userId", userId.toString());
  }

  public signIn(loginData: LoginData) {
    localStorage.setItem("token",  `Basic ${btoa(loginData.login+':'+loginData.password)}`);

    this.http.get<number>(`${environment.apiUrl}user/login`, {
    }).subscribe(
      (data: number) => {
        localStorage.setItem("userId", data.toString());
        this.router.navigate([{ outlets: { primary: ['main','files'], sidebar: ['sidebar','user'] }}]);
      },
      error => {
        console.log(error);
        this.signOut();
      }
    );
  }

  public signUp(loginData: LoginData) {

    this.http.post(`${environment.apiUrl}user/register`, {}, {
      params: { login: loginData.login, password: loginData.password }
    }).subscribe(
      date => this.router.navigate([{ outlets: { sidebar: ['sidebar','login'] }}]),
      error => console.log(error)
    );
  }

  public signOut() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    this.router.navigate([{ outlets: { primary: ['main','welcome'], sidebar: ['sidebar','login'] }}]);
  }

  public isAuthorized(): boolean {

    if (localStorage.getItem("userId") == null) {
      this.signOut();
      return false;
    } else {
      return true;
    }
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem("token") != null;
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}user/data`, {
      params: {userid: this.getUserId().toString()},
    });
  }

  public updateUserData(user: User): Observable<null> {
    user.userId = parseInt(localStorage.getItem("userId"));
    return this.http.put<null>(environment.apiUrl + 'user/update', user);
  }
}
