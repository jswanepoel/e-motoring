import { Component, OnInit } from '@angular/core';
import { QuestionsContainer, QuestionTypeNamespace, FormCreator, DependentOption, QuestionService, Vehicle, ParentService } from '@facetech/common-ui';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register-additional-system-users',
  templateUrl: './register-additional-system-users.component.html',
  styleUrls: ['./register-additional-system-users.component.css']
})
export class RegisterAdditionalSystemUsersComponent implements OnInit {

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
  }

  private defineQuestions() {
    this.formDefinition = this.questionService.getDefinition('additionalRegistration', 'AdditionalRegistration', '', true);
  }
}
