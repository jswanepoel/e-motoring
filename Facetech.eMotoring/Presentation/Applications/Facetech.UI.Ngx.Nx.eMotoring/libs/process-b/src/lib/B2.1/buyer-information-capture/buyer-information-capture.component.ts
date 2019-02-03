import { Component, OnInit } from '@angular/core';
import { QuestionTypeNamespace } from 'libs/common-ui/src/lib/questions/question-types/question-types.component';
import { QuestionService } from 'libs/common-ui/src/lib/questions/question.service';
import { DependentOption, FormCreator, QuestionsContainer } from 'libs/common-ui/src/lib/questions/question-base.component';
import { FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-buyer-information-capture',
  templateUrl: './buyer-information-capture.component.html',
  styleUrls: ['./buyer-information-capture.component.css']
})
export class BuyerInformationCaptureComponent implements OnInit {
  public includeFooter: boolean = false; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;
  form: FormGroup;
  payLoad = '';
  ownerTypeOptions: SelectItem[];
  countries: SelectItem[];
  formDefinition: QuestionsContainer;
  public questionData: any;
  qDataSub: Subscription;
  index: number = 0;
  entityType: string = 'company';

  constructor(private questionService: QuestionService) {
    this.defineQuestions();
  }


  public ngOnInit() {




  }

  defineQuestions() {
    let formDefinition = new FormCreator('Buyer Information Capture', true);

    switch (this.entityType) {
      case 'individual':
        {
          formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
            {
              key: 'communicationMethod',
              label: 'Prefered Communication method',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'communicationMethods',
            null
          )).addValidators('communicationMethod', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'mobileNumber',
              label: 'Mobile Number',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('mobileNumber', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'email',
              label: 'Email Address',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'text'
          )).addValidators('email', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'postalCode',
              label: 'Postal Code',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('postalCode', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'province_cd',
              label: 'Province',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'provinces',
            'Select Province',
            false
          )).addValidators('province_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'city_cd',
              label: 'City',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'cities',
            null,
            false
          )).addValidators('city_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address1',
              label: 'Address Line 1',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'text'
          )).addValidators('address1', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address2',
              label: 'Address Line 2',
              errorText: '',
              order: this.index++,
              disabled: false
            },
            'text'
          ));
          break;
        }








      case 'company':
        {
          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'province_cd',
              label: 'Province',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'provinces',
            'Select Province',
            false
          )).addValidators('province_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'city_cd',
              label: 'City',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'cities',
            null,
            false
          )).addValidators('city_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address1',
              label: 'Address Line 1',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'text'
          )).addValidators('address1', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address2',
              label: 'Address Line 2',
              errorText: '',
              order: this.index++,
              disabled: false
            },
            'text'
          ));

       

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'mobileNumber',
              label: 'Company Mobile Number',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('mobileNumber', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'email',
              label: 'Company Email address',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('email', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
            {
              key: 'communicationMethod',
              label: 'Prefered Communication method',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'communicationMethods',
            null
          )).addValidators('communicationMethod', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'AmobileNumber',
              label: 'Authorised person contact number',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('AmobileNumber', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'Aemail',
              label: 'Authorised person email address',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('Aemail', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'firstName',
              label: 'First name',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'string'
          )).addValidators('firstName', [['required']]);


          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'surname',
              label: 'Surname',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'string'
          )).addValidators('surname', [['required']]);
          break;
        }

      case 'government':
        {
          formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
            {
              key: 'communicationMethod',
              label: 'Prefered Communication method',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'communicationMethods',
            null
          )).addValidators('communicationMethod', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'mobileNumber',
              label: 'Mobile Number',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('mobileNumber', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'email',
              label: 'Email Address',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('email', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'province_cd',
              label: 'Province',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'provinces',
            'Select Province',
            false
          )).addValidators('province_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'city_cd',
              label: 'City',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'cities',
            null,
            false
          )).addValidators('city_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address1',
              label: 'Address Line 1',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'text'
          )).addValidators('address1', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address2',
              label: 'Address Line 2',
              errorText: '',
              order: this.index++,
              disabled: false
            },
            'text'
          ));
          break;
        }

      case 'embassy':
        {
          formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
            {
              key: 'communicationMethod',
              label: 'Prefered Communication method',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'communicationMethods',
            null
          )).addValidators('communicationMethod', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'mobileNumber',
              label: 'Mobile Number',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('mobileNumber', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'email',
              label: 'Email Address',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('email', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'province_cd',
              label: 'Province',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'provinces',
            'Select Province',
            false
          )).addValidators('province_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'city_cd',
              label: 'City',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'cities',
            null,
            false
          )).addValidators('city_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address1',
              label: 'Address Line 1',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'text'
          )).addValidators('address1', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address2',
              label: 'Address Line 2',
              errorText: '',
              order: this.index++,
              disabled: false
            },
            'text'
          ));
          break;
        }

      case 'Other Entities':
        {
          formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
            {
              key: 'communicationMethod',
              label: 'Prefered Communication method',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'communicationMethods',
            null
          )).addValidators('communicationMethod', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'mobileNumber',
              label: 'Mobile Number',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('mobileNumber', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'email',
              label: 'Email Address',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'number'
          )).addValidators('email', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'province_cd',
              label: 'Province',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'provinces',
            'Select Province',
            false
          )).addValidators('province_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
            {
              key: 'city_cd',
              label: 'City',
              errorText: ' is invalid',
              order: this.index++,
              disabled: false
            },
            'cities',
            null,
            false
          )).addValidators('city_cd', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address1',
              label: 'Address Line 1',
              errorText: ' is required!',
              order: this.index++,
              disabled: false
            },
            'text'
          )).addValidators('address1', [['required']]);

          formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
            {
              key: 'address2',
              label: 'Address Line 2',
              errorText: '',
              order: this.index++,
              disabled: false
            },
            'text'
          ));
          break;
        }
      default:

    }
    this.formDefinition = formDefinition.container;
  }


}
