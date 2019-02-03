import { Component } from '@angular/core';

import { QuestionsContainer, FormCreator, QuestionTypeNamespace } from '@facetech/common-ui';

@Component({
  selector: 'ngx-transferor',
  templateUrl: './transferor.component.html',
  styleUrls: ['./transferor.component.css']
})
export class TransferorComponent {

  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;

  public formDefinition: QuestionsContainer;
  //public form: FormGroup;
  //public payLoad = '';
  public questionData: any;

  constructor() {
    this.defineQuestions();
  }

  public ngOnInit() {
  }

  private defineQuestions(): void {
    let formDefinition = new FormCreator('Transferor', true);
    let order = 1;

    formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
      {
        key: 'title_cd',
        label: 'Title',
        errorText: ' is invalid',
        order: order++,
        disabled: false
      },
      'titles',
      'Select Title',
      false
    )).addValidators('title_cd', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'ownerNumber',
        label: 'Owner Number',
        errorText: ' is required!',
        order: order++,
        disabled: false
      },
      'number'
    )).addValidators('ownerNumber', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
      {
        key: 'province_cd',
        label: 'Province',
        errorText: ' is invalid',
        order: order++,
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
        order: order++,
        disabled: false
      },
      'cities',
      'Select City',
      false
    )).addValidators('city_cd', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'address1',
        label: 'Address Line 1',
        errorText: ' is required!',
        order: order++,
        disabled: false
      },
      'text'
    )).addValidators('address1', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'address2',
        label: 'Address Line 2',
        errorText: '',
        order: order++,
        disabled: false
      },
      'text'
    ));

    formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
      {
        key: 'identificationType',
        label: 'Identification Type',
        errorText: ' is invalid',
        order: order++,
        disabled: false
      },
      'IDTypes',
      'Select Identification Type',
      false
    )).addValidators('identificationType', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.InputMaskQuestion(
      {
        key: 'identificationNumber',
        label: 'Identification Number',
        errorText: ' is required!',
        order: order++,
        disabled: false
      },
      'IdMaskTypes',
      null
    )).addValidators('identificationNumber', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
      {
        key: 'aga_cd',
        label: 'Aga',
        errorText: ' is invalid',
        order: order++,
        disabled: false
      },
      'aga',
      'Select AGA',
      false
    )).addValidators('aga_cd', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.RadioQuestion(
      {
        key: 'usage_cd',
        label: 'Usage',
        errorText: ' is invalid',
        order: order++,
        disabled: false
      },
      'usageTypes'
    )).addValidators('usage_cd', [['required']]);

    formDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'placeKept',
        label: 'Place Kept',
        errorText: '',
        order: order++,
        disabled: false
      },
      'text'
    ));

    //let groupDepOp: DependentOption[] = [
    //  {
    //    dependOnId: 'identificationType',
    //    attributes: [
    //      {
    //        attrName: 'hidden',
    //        conditions: [
    //          {
    //            conditionVal: 'passportNumber',
    //            onMatchSetTo: false
    //          }
    //        ]
    //      }
    //    ]
    //  }];

    //let identificationNumberDependencies = [
    //  {
    //    dependOnId: 'identificationType',
    //    attributes: [
    //      {
    //        attrName: 'mask',
    //        isBoundAttribute: true,
    //        conditions: [
    //          {
    //            conditionVal: 'passportNumber',
    //            onMatchSetTo: 'passportNumber'
    //          },
    //          {
    //            conditionVal: 'businessRegistartionNo',
    //            onMatchSetTo: 'businessRegistartionNo'
    //          },
    //          {
    //            conditionVal: 'newNIC',
    //            onMatchSetTo: 'newNIC'
    //          }
    //        ]
    //      },
    //      {
    //        attrName: 'hidden',
    //        conditions: [
    //          {
    //            conditionVal: 'passportNumber',
    //            onMatchSetTo: true
    //          }
    //        ]
    //      },
    //      {
    //        attrName: 'disabled',
    //        conditions: [
    //          {
    //            conditionVal: 'undefined',
    //            onMatchSetTo: true
    //          }
    //        ]
    //      }
    //    ]
    //  }
    //];

    //formDefinition.addDependentOption('identificationNumber', identificationNumberDependencies);

    //formDefinition.addGroupDependants('foreigner', { questionIds: ['travelDocumentNumber', 'travelDocumentIssueCountry', 'visaReferenceNumber', 'visaCategory', 'VisaExpiryDate'], dependentOptions: groupDepOp })
    //formDefinition.addGroupDependants('company', { questionIds: ['identificationType', 'userTitle', 'userGender', 'firstName', 'surname', 'dateOfBirth'], dependentOptions: groupDepOp2 })

    this.formDefinition = formDefinition.container;
  }

  ngAfterViewInit(): void {
  }
}
