import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { File } from "../../wrappers/file"

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient,
  ) { }

  public getUserFiles(page: number, size: number): Observable<File[]> {

    /* TODO: remove +  */
    /* TODO: move localStorage.getItem to AuthService */
    return this.http.get<File[]>( environment.apiUrl + "file/download", {
      params : {
        userid: localStorage.getItem("userId"),
        page: page.toString(),
        size: size.toString(),
      }
    });
  }

  public getFilesCount(): Observable<number> {
    /* TODO: look behind you */
    /* TODO: move localStorage.getItem to AuthService */
    return this.http.get<number>(`${environment.apiUrl}file/count`, {
      params : { userid: localStorage.getItem("userId") }
    });
  }
}
