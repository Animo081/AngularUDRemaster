import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { environment } from "../../../environments/environment";
import { User } from "../../wrappers/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  public signIn(login: string, password: string) {
    localStorage.setItem("token",  `Basic ${btoa(login+':'+password)}`);

    this.http.get<number>(environment.apiUrl + 'user/login', {
    }).subscribe(
      (data: number) => {
        localStorage.setItem("userId", data.toString());
        this.router.navigate([{ outlets: { primary: ['main','files'], sidebar: ['sidebar','user'] }}]);
      },
      error => {
        console.log(error);
        /* TODO: use this.signOut(); */
        localStorage.removeItem("token");
      }
    );
  }

  /* TODO: send formValue instead separate params. */
  public signUp(login: string, password: string) {

    this.http.post(environment.apiUrl + 'user/register', {}, {
      params: { login: login, password: password }
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
      /* TODO: use this.signOut(); */
      this.router.navigate([{ outlets: { primary: ['main','welcome'], sidebar: ['sidebar','login'] }}]);
      return false;
    } else {
      return true;
    }
  }

  public isAuthenticated(): boolean {

    return localStorage.getItem("token") != null;
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(environment.apiUrl + 'user/data', {
      params: {userid: localStorage.getItem("userId")},
    });
  }

  public updateUserData(user: User): Observable<null> {
    user.userId = parseInt(localStorage.getItem("userId"));
    return this.http.put<null>(environment.apiUrl + 'user/update', user);
  }
}
