import { Component, OnInit } from '@angular/core';

import {FileService} from './FileService'
import {File} from './File'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UDRemaster';

  files: File[];
 
  constructor(private fileService: FileService) {
  }
 
  ngOnInit() {
    this.fileService.findAll().subscribe(data => {
      this.files = data;
    });
  }
}
