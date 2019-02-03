import { Component, ElementRef, ViewChild } from '@angular/core';
import { QuestionsContainer, DependentOption, FormCreator, QuestionService, QuestionTypeNamespace } from '@facetech/common-ui';
import { Subscription } from 'rxjs';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'ngx-capture-rce-payment',
  templateUrl: './capture-rce-payment.component.html',
  styleUrls: ['./capture-rce-payment.component.css']
})
/** CaptureRCE component*/
export class CaptureRcePaymentComponent {

  @ViewChild('contentSize') contentSize: ElementRef; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()  

  formDefinition: QuestionsContainer;

  dataForModel: {
    selectedAgency: SelectItem,
    selectedMonth: string,
    selectedYear: string,
    addPaymentInstruction: boolean

  } = {
      selectedAgency: null,
      selectedMonth: '',
      selectedYear: '',
      addPaymentInstruction: false
    };

  public questionData: any;
  qDataSub: Subscription;

  constructor(private questionService: QuestionService) {
    this.defineQuestions();
  }

  ngAfterViewInit(): void {
    // this.qDataSub = this.questionService.getQuestionData().subscribe(x => { this.questionData = x });
  }

  // Base Template method : Do not alter
  public calculateCardBodyHeight(): number {
    let offset = 0;

    if (this.contentSize.nativeElement.offsetHeight > 665) {
      offset = this.includeFooter ? 72 : 72;
    }
    else {
      offset = this.includeFooter ? 127 : 72;
    }

    let calculatedheight = window.innerHeight - 176 - offset;
    return calculatedheight < 200 ? 200 : calculatedheight;
  }

  defineQuestions() {

    let formDefinition = new FormCreator('RCE Capture', true);

    let entityNameQ = new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'entityName',
        label: 'Entity name',
        errorText: ' is required!',
        order: 1,
        disabled: false
      },
      'string'
    );

    //let statementPeriodQ=
    //let statementDateQ
    //let amountDueQ=





  //  let identificationTypeQ = new QuestionTypeNamespace.DropdownQuestion(
  //    {
  //      key: 'identificationType',
  //      label: 'Identification Type',
  //      errorText: ' is invalid',
  //      order: 1,
  //      disabled: false
  //    },
  //    'IDTypes',
  //    null
  //  );

  //  let surnameQ = new QuestionTypeNamespace.TextboxQuestion(
  //    {
  //      key: 'surname',
  //      label: 'Surname',
  //      errorText: ' is required!',
  //      order: 2,
  //      disabled: false
  //    },
  //    'string'
  //  );

  //  let identificationNumberQ = new QuestionTypeNamespace.InputMaskQuestion(
  //    {
  //      key: 'identificationNumber',
  //      label: 'Identification Number',
  //      errorText: ' is required!',
  //      order: 4,
  //      disabled: false
  //    },
  //    'IdMaskTypes',
  //    null
  //  );
  //  let datetest = new QuestionTypeNamespace.DateQuestion(
  //    {
  //      key: 'datetest',
  //      label: 'Date',
  //      errorText: ' is required!',
  //      order: 5,
  //      disabled: false
  //    },
  //    'pi pi-check'
  //  );


  //  let groupDepOp: DependentOption[] = [
  //    {
  //      dependOnId: 'identificationType',
  //      attributes: [
  //        {
  //          attrName: 'hidden',
  //          conditions: [
  //            {
  //              conditionVal: 'passportNumber',
  //              onMatchSetTo: true
  //            }
  //          ]
  //        }
  //      ]
  //    }]
  //    ;

  //  let identificationNumberDependencies = [
  //    {
  //      dependOnId: 'identificationType',
  //      attributes: [
  //        {
  //          attrName: 'mask',
  //          isBoundAttribute: true,
  //          conditions: [
  //            {
  //              conditionVal: 'passportNumber',
  //              onMatchSetTo: 'passportNumber'
  //            },
  //            {
  //              conditionVal: 'businessRegistartionNo',
  //              onMatchSetTo: 'businessRegistartionNo'
  //            },
  //            {
  //              conditionVal: 'newNIC',
  //              onMatchSetTo: 'newNIC'
  //            }
  //          ]
  //        },
  //        {
  //          attrName: 'hidden',
  //          conditions: [
  //            {
  //              conditionVal: 'businessRegistartionNo',
  //              onMatchSetTo: true
  //            }
  //          ]
  //        },
  //        {
  //          attrName: 'disabled',
  //          conditions: [
  //            {
  //              conditionVal: 'undefined',
  //              onMatchSetTo: true
  //            }
  //          ]
  //        }
  //      ]
  //    }
  //  ];

  //  formDefinition.addQuestion(identificationTypeQ);
  //  formDefinition.addValidators('identificationType', [['required']]);

  //  formDefinition.addQuestion(firstNameQ);
  //  formDefinition.addValidators('firstName', [['required'], ['minLength', '5']]);

  //  formDefinition.addQuestion(surnameQ);
  //  formDefinition.addValidators('surname', [['required']]);

  //  formDefinition.addQuestion(identificationNumberQ);
  //  formDefinition.addValidators('identificationNumber', [['required']]);

  //  formDefinition.addQuestion(datetest);
  //  formDefinition.addValidators('datetest', [['required']]);

  //  formDefinition.addDependentOption('identificationNumber', identificationNumberDependencies);

  //  formDefinition.addGroupDependants('test', { questionIds: ['firstName', 'surname'], dependentOptions: groupDepOp })

  //  this.formDefinition = formDefinition.container;
  }

}
