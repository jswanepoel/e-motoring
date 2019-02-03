import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { QuestionsContainer, ParentService, QuestionService } from '@facetech/common-ui';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-additional-vehicle-information',
  templateUrl: './additional-vehicle-information.component.html',
  styleUrls: ['./additional-vehicle-information.component.css']
})
export class AdditionalVehicleInformationComponent implements OnInit {
    ngOnInit(): void {
      
    }

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

  public constructor(
    public router: Router,
    private parentService: ParentService, private questionService: QuestionService) {
    this.defineQuestions();
  }

  private defineQuestions() {
    this.formDefinition = this.questionService.getDefinition('additionalVehicleInformation', 'AdditionalVehicleInformation', '', true);
  }
}
