import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ParentService } from '@facetech/common-ui';
import { ProcessBService } from '../../services/process-b.service';
import { Vehicle } from '../..';


@Component({
  selector: 'ngx-display-vehicle-information',
  templateUrl: './display-vehicle-information.component.html',
  styleUrls: ['./display-vehicle-information.component.css']
})
export class DisplayVehicleInformationComponent implements OnInit {

  constructor(public router: Router, private ParentService: ParentService, private ProcessB: ProcessBService) { }
  public detailsdata: Vehicle[];
  public parentHeaders: string[];
  public parentHeadersReal: string[];
  public selectedVehicle: any;
  public includeFooter: boolean = true;
  public bodyCenter = true;
  ngOnInit() {
    this.parentHeaders = [];
    this.parentHeadersReal = [];
    this.ParentService.getVehicle().then((value) => {
      this.detailsdata = value;
      this.setOp(Object.keys(this.detailsdata[1]));
    });
    this.selectedVehicle = this.ProcessB.GetVehicle();
    if (this.selectedVehicle == null)
    {
      this.router.navigate(['/B2.1/update-vehicle-info']);
    }
    //console.log(this.selectedVehicle);
  }

  public setOp(_parentHeaders: any):void {
    var tmp: string = "";
    for (var _i = 0; _i < _parentHeaders.length; _i++) {
      tmp = _parentHeaders[_i];
      tmp = tmp.replace(/([A-Z])/g, ' $1');
      tmp = tmp.replace(/^./, function (str) { return str.toUpperCase(); });
      this.parentHeaders.push(tmp);
      this.parentHeadersReal.push(_parentHeaders[_i]);
    }
  }

  public Confirm(): void
  {
    this.router.navigate(['/B2.1/buyer-limited-information-capture']);
  }

 
  

}
