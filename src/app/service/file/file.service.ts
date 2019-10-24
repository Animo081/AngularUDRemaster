import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { AuthenticationService } from "../user/authentication.service";
import { environment } from "../../../environments/environment";
import { File } from "../../wrappers/file"

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient,
  ) { }

  public getUserFiles(page: number, size: number): Observable<File[]> {

    return this.http.get<File[]>( `${environment.apiUrl}file/download`, {
      params : {
        userid: this.authenticationService.getUserId().toString(),
        page: page.toString(),
        size: size.toString(),
      }
    });
  }

  public getFilesCount(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}file/count`, {
      params : {
        userid: this.authenticationService.getUserId().toString()
      }
    });
  }
}
