import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { File } from './File';
import { Observable } from 'rxjs';

@Injectable()
export class FileService {

  constructor(private http: HttpClient) {}

  public findAll(): Observable<File[]> {
    return this.http.get<File[]>("http://localhost:8080/file/download?userid=7");
  }
}
