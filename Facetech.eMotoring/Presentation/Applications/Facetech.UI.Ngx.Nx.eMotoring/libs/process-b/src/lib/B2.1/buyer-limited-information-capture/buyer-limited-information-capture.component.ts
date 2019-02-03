import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng/api';

import {
  ParentService,
  QuestionTypeNamespace,
  QuestionsContainer,
  FormCreator,
  DependentOption,
  Vehicle,
  QuestionService
} from '@facetech/common-ui';

@Component({
  selector: 'ngx-buyer-limited-information-capture',
  templateUrl: './buyer-limited-information-capture.component.html',
  styleUrls: ['./buyer-limited-information-capture.component.css']
})
export class BuyerLimitedInformationCaptureComponent implements OnInit {

  public includeFooter: boolean = false; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;
  public exists: boolean = true;
  form: FormGroup;
  payLoad = '';
  ownerTypeOptions: SelectItem[];
  countries: SelectItem[];
  formDefinition: QuestionsContainer;
  public questionData: any;
  qDataSub: Subscription;

  public detailsdata: Vehicle[];
  public parentHeaders: string[];
  public parentHeadersReal: string[];
  public selectedVehicle: any;

  public constructor(
    public router: Router,
    private parentService: ParentService, private questionService: QuestionService) {
    this.defineQuestions();
  }

  public ngOnInit() {
    this.parentHeaders = [];
    this.parentHeadersReal = [];
    this.parentService.getVehicle().then((value) => {
      this.detailsdata = value;
      this.setOp(Object.keys(this.detailsdata[1]));
    });
  }

  public setOp(parentHeaders: any): void {
    var tmp: string = "";
    for (var i = 0; i < parentHeaders.length; i++) {
      tmp = parentHeaders[i];
      tmp = tmp.replace(/([A-Z])/g, ' $1');
      tmp = tmp.replace(/^./, function (str) { return str.toUpperCase(); });
      this.parentHeaders.push(tmp);
      this.parentHeadersReal.push(parentHeaders[i]);
    }
  }

  private defineQuestions() {
    this.formDefinition = this.questionService.getDefinition('additionalRegistration','AdditionalRegistration','',true);
  }
}
