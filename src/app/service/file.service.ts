import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { File } from "../wrappers/file"

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public getUserFiles(page: number, size: number): Observable<File[]> {

    // TODO: add global interceptor for tocken
    return this.http.get<File[]>("http://localhost:8080/file/download", {
      params : {
        userid: localStorage.getItem("userId"),
        page: page.toString(),
        size: size.toString(),
      }
    });
  }

  public getFilesCount(): Observable<number> {

    return this.http.get<number>("http://localhost:8080/file/count", {
      params : { userid: localStorage.getItem("userId") }
    });
  }
}
