import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-identify-import-certificate',
  templateUrl: './identify-import-certificate.component.html',
  styleUrls: ['./identify-import-certificate.component.css']
})
export class IdentifyImportCertificateComponent implements OnInit {

  public breadcrumbItems: any;
  public includeFooter: boolean = true;
  public bodyCenter = false;
  cars: any;
  tableTools: any;
  headers: string[];
  title: string = "Cars";
  public parentHeaders: string[];
  public parentHeadersReal: string[];



  constructor() {
    this.parentHeaders = [];
    this.parentHeadersReal = [];
    this.cars = [
      { "vin": "WAU2GAFC6DN079644", "make": "Kia", "makeCode": "3568420166780617", "modelDescription": "envisioneer back-end interfaces", "color": "Aquamarine", "engineCapacity": 5, "countryOfOrigin": "Indonesia", "countryOfImport": "China", "status": 26, "importDate": "10/26/2010" }
    ];
    this.setOp(Object.keys(this.cars[0]));
  }

  public setOp(_parentHeaders: any): void {
    var tmp: string = "";
    for (var _i = 0; _i < _parentHeaders.length; _i++) {
      tmp = _parentHeaders[_i];
      tmp = tmp.replace(/([A-Z])/g, ' $1');
      tmp = tmp.replace(/^./, function (str) { return str.toUpperCase(); });
      this.parentHeaders.push(tmp);
      this.parentHeadersReal.push(_parentHeaders[_i]);

    }
  }

  ngOnInit() {
  }
}
