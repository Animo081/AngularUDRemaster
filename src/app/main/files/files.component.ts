import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material";
import { Observable } from "rxjs";

import { FileService } from "../../service/file/file.service";
import { File } from "../../wrappers/file";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  private files: Observable<File[]>;

  private displayedColumns: string[] = ['file', 'name', 'type', 'size', 'insertedOn'];

  private length: number;
  private pageSize = 10;
  private pageSizeOptions: number[] = [10, 15, 20];

  constructor(
    private fileService: FileService,
  ) {}

  ngOnInit(): void {
    this.fileService.getFilesCount().subscribe((data: number) => {
      this.length = data;
    });
    this.files = this.fileService.getUserFiles(0, this.pageSize);
  }

  private pageEvent(pageEvent: PageEvent) {
    this.files = this.fileService.getUserFiles(pageEvent.pageIndex, pageEvent.pageSize);
  }
}
