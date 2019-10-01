import { Injectable } from '@angular/core';
import { User } from "../wrappers/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public signIn(login: string, password: string): Observable<number> {

    return this.http.get<number>('http://localhost:8080/user/login', {
      params: {login: login, password: password},
      headers: {Authorization: `Basic ${btoa('logich:pass')}`}
    })
  }

  public signUp(login: string, password: string) {

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
