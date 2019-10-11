import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material";
// TODO: remove useless code
import { Observable } from 'rxjs';

import { FileService } from "../../service/file.service";
import { File } from "../../wrappers/file";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  // TODO: use Observable instead arrayData
  private files: File[];

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
    this.fileService.getUserFiles(0, this.pageSize).subscribe((data: File[]) => {
      this.files = data;
    });
  }

  private pageEvent(pageEvent: PageEvent) {
    this.fileService.getUserFiles(pageEvent.pageIndex, pageEvent.pageSize).subscribe((data: File[]) => {
      this.files = data;
    });
  }
}
