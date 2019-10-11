import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of as ObservableOf } from "rxjs";
import { Router } from "@angular/router";

import { User } from "../wrappers/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public signIn(login: string, password: string): Observable<number> {

    // TODO: use Environment for ApiURL
    return ObservableOf(12312312312312);
/*    return this.http.get<number>('http://localhost:8080/user/login', {
      // TODO: use either params or authTocken
      params: {login: login, password: password},
      // TODO: don't use hardcode data
      headers: {Authorization: `Basic ${btoa('logich:pass')}`}
    });*/
  }

  public signUp(login: string, password: string) {

    // TODO: use Observable
    // TODO: use .pipe for any logic before subscribe
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/user/register', {}, {
        headers: {},
        params : { login: login, password: password }
      }).toPromise().then(
        resolve => {
          this.router.navigate([{ outlets: { sidebar: ['sidebar','login'] }}]);
        }, reject => {
          console.log(reject);
        }
      )
    })
  }

  getUser(): Observable<User> {

    return this.http.get<User>('http://localhost:8080/user/data', {
        params: {userid: localStorage.getItem("userId")},
    });
  }

  updateUserData(user: User){

    this.http.put('http://localhost:8080/user/update',
      user
    ).subscribe(data => {},error => console.error(error))
  }
}
