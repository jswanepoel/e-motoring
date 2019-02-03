import { Component, OnInit, AfterViewInit, ViewChild, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';

import {
  QuestionsContainer,
  QuestionService,
  FormCreator,
  QuestionTypeNamespace,
  DependentOption
} from '../questions';

@Component({
  selector: 'ngx-signatory-capture',
  templateUrl: './signatory-capture.component.html',
  styleUrls: ['./signatory-capture.component.css']
})
/** signatory-capture component*/
export class SignatoryCaptureComponent implements OnInit, AfterViewInit, DoCheck {

  items: any;
  itemsArr: any[];
  tableTools: any;
  headers: string[];
  title: string = "S";
  submitB: boolean = false;
  ngAfterViewInit(): void {
    // this.qDataSub = this.questionService.getQuestionData().subscribe(x => { this.questionData = x });
  }
  public bodyCenter = false;
  formDefinition: QuestionsContainer;
  public questionData: any;
  qDataSub: Subscription;
  @ViewChild('formDir') form:any;

  public constructor(private questionService: QuestionService) {
    this.defineQuestions();
  
  }

  public ngOnInit() {
    this.tableTools = [{ "gfilter": false, "filter": false, "select": false, "action": false, "sort": true, "row": 10, 'update': true }];
    this.headers = [];
    this.itemsArr = [];
    this.tableTools = JSON.stringify(this.tableTools);
   

  }

  ngDoCheck(): void {
    if (this.items != null)
      this.items = [...this.items];
  }

  public defineQuestions() {
    let formDefinition = new FormCreator('Signatory Capture', true);
   

    let identificationNumberQ = new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'identificationNumber',
        label: 'Identification Number',
        errorText: ' is required!',
        order: 2,
        disabled: false
      },
      'string'
    );

    let firstNameQ = new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'firstName',
        label: 'First name',
        errorText: ' is required!',
        order: 3,
        disabled: false
      },
      'string'
    );

    let surnameQ = new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'surname',
        label: 'Surname',
        errorText: ' is required!',
        order: 4,
        disabled: false
      },
      'string'
    );

 
    formDefinition.addQuestion(identificationNumberQ);
    formDefinition.addValidators('identificationNumber', [['required']]);

    formDefinition.addQuestion(firstNameQ);
    formDefinition.addValidators('firstName', [['required'], ['minLength', '5']]);

    formDefinition.addQuestion(surnameQ);
    formDefinition.addValidators('surname', [['required']]);


    this.formDefinition = formDefinition.container;
  }


  public submit() {
   
    let obj = JSON.parse(this.form.onSubmit());
    this.itemsArr.push(obj);
    this.items = JSON.stringify(this.itemsArr);
    this.submitB = true;
    this.items = [...this.items];
    this.form.form.reset();
  }
}


//  constructor(private fb: FormBuilder) { }

//  @ViewChild('userform') userform: FormGroup;
//  question: boolean[] = [];
//  questionCount: number = -1;
//  maskId = '';
//  idType: SelectItem[] = [
//    {
//      label: 'NIC', value: 'newNIC'
//    },
//    {
//      label: 'Business Registartion No', value: 'businessRegistartionNo'
//    },
//    {
//      label: 'Passport Number', value: 'passportNumber'
//    }];

//  public ngOnInit() {

//    this.userform = this.fb.group({});
//    this.userform = this.fb.group({
//      'name': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
//      'surname': new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
//      'identificationType': new FormControl('', Validators.required),
//      'identificationNumber': new FormControl('', Validators.compose([Validators.required])),
//    });
//    Object.keys(this.userform).forEach((key) => { this.question[this.questionCount++] = false });
//  }


//  getIdMask(event) {

//    if (event.value == 'newNIC') {
//      this.maskId = '';
//      this.userform.controls.identificationNumber.setValue('');
//      this.maskId = this.getIDMask();
//    }
//    else if (event.value == 'NIC') {
//      this.maskId = '';
//      this.userform.controls.identificationNumber.setValue('');
//      this.maskId = this.getIdMaskAlt();
//    }
//    else if (event.value == 'businessRegistartionNo') {
//      this.maskId = '';
//      this.userform.controls.identificationNumber.setValue('');
//      this.maskId = this.getIdBusinessCode();
//    }
//    else if (event.value == 'passportNumber') {
//      this.maskId = '';
//      this.userform.controls.identificationNumber.setValue('');
//      this.maskId = this.getPassportCode();
//    }
//    else {
//      this.question[0] = true;
//    }
//  }





//  getIdMaskAlt(): string {
//    return '999999999*';
//  }
//  getIDMask(): string {
//    return '99999999999*';
//  }
//  getIdBusinessCode(): string {
//    return '**********';
//  }
//  getPassportCode(): string {
//    return '**********';
//  }



//}
