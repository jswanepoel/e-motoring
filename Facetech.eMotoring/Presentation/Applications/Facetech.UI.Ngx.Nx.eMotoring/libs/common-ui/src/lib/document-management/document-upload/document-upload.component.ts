import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { FilePickerDirective, ReadFile } from 'ngx-file-helpers';
import { concat } from 'rxjs';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'ngx-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

 

  //https://www.npmjs.com/package/ngx-file-helpers
  //https://stackblitz.com/edit/ngx-file-helpers-demo?file=app%2Ffile-picker-demo%2Ffile-picker-demo.component.html

  //Investigate : https://github.com/bleenco/ngx-uploader
  //              https://github.com/bleenco/ngx-uploader/blob/master/src/app/app.component.html (Progressbar)

  //https://stuk.github.io/jszip/
  //https://stuk.github.io/jszip/documentation/examples.html
  //https://stackoverflow.com/questions/43097159/import-jszip-in-angular-2-project

  //https://github.com/bleenco/ngx-uploader
  //https://ngx-uploader.com/

  @ViewChild(FilePickerDirective)
  private filePicker;
  picked: ReadFile;
  cols: any;
  filename: any;
  tableTools: any;
  fileObj: any;
  headers: string[];
  title: string = "Upload";
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = false;

  public constructor() {
  } 

  public ngOnInit() {
  
    this.filename = [{
      "filename": "Upload/Scan file",
      "type": "file type",
      "size": "0 MB"
    }];
    this.tableTools = [{ "gfilter": true, "filter": false, "select": false, "action": true, "sort": false, "row": 5, "upload": true, 'update': false  }];
    this.headers = [];
    this.tableTools = JSON.stringify(this.tableTools);
    this.filename = JSON.stringify(this.filename);
  }

  
}
