import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectItem, MenuItem } from 'primeng/api';

import {
  QuestionService,
  BreadcrumbsService,
  DynamicFormComponent,
  QuestionsContainer,
  FormCreator,
  QuestionTypeNamespace
} from '@facetech/common-ui';

import { FinanceModels } from '../../Interfaces/Finance.interfaces';

@Component({
    selector: 'ngx-generate-rce-statement',
    templateUrl: './generate-rce-statement.component.html',
    styleUrls: ['./generate-rce-statement.component.css']
})
/** GenerateStatement component*/
export class GenerateRCEStatementComponent {
  @ViewChild('contentSize') contentSize: ElementRef; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  @ViewChild('formDir1') _formDir1: DynamicFormComponent;
  @ViewChild('formDir2') _formDir2: DynamicFormComponent;

  private items: MenuItem[];

  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()

  formDefinitions: Array<QuestionsContainer> = [];

  public entityData;

  private headers = [
    { field: 'id', header: 'Tx Number' },
    { field: 'type_lookupvalue_id', header: 'Tx Type' },
    { field: 'capturedate', header: 'Date' },
    { field: 'feetype_lookupvalue_id', header: 'Fee Type' },
    { field: 'amount', header: 'Amount (excl tax)' },
    { field: 'taxpercentage', header: 'Tax Amount' },
    { field: 'total', header: 'Total' }
  ];
  private transactions: FinanceModels.IFee[] = [
    {
      id: '1',
      rootid: 1,
      type_lookupvalue_id: 2,
      capturedate: '07/01/2019',
      feeeffectivedate: '07/01/2019',
      feetype_lookupvalue_id: 1,
      taxpercentage: 15,
      amount: 165,
      isactive: 1
    }, {
      id: '2',
      rootid: 1,
      type_lookupvalue_id: 2,
      capturedate: '07/01/2019',
      feeeffectivedate: '07/01/2019',
      feetype_lookupvalue_id: 1,
      taxpercentage: 15,
      amount: 165,
      isactive: 1
    }, {
      id: '3',
      rootid: 1,
      type_lookupvalue_id: 2,
      capturedate: '07/01/2019',
      feeeffectivedate: '07/01/2019',
      feetype_lookupvalue_id: 1,
      taxpercentage: 15,
      amount: 165,
      isactive: 1
    }, {
      id: '4',
      rootid: 1,
      type_lookupvalue_id: 2,
      capturedate: '07/01/2019',
      feeeffectivedate: '07/01/2019',
      feetype_lookupvalue_id: 2,
      taxpercentage: 15,
      amount: 165,
      isactive: 1
    }, {
      id: '5',
      rootid: 1,
      type_lookupvalue_id: 2,
      capturedate: '07/01/2019',
      feeeffectivedate: '07/01/2019',
      feetype_lookupvalue_id: 4,
      taxpercentage: 15,
      amount: 165,
      isactive: 1
    }, {
      id: '6',
      rootid: 1,
      type_lookupvalue_id: 2,
      capturedate: '07/01/2019',
      feeeffectivedate: '07/01/2019',
      feetype_lookupvalue_id: 3,
      taxpercentage: 15,
      amount: 165,
      isactive: 1
    }];

  public workingTransactions = [];
  public selectedTransactions: Array<FinanceModels.IFee> = [];

  public questionData: any = {};
  qDataSub: Subscription;

  makingPayment: boolean = false;
  paymentTypeSelected: boolean = false;
  paymentSuccess: boolean = false;

  public paymentData = {
    paymentType: undefined,
    paymentAmount: 0,
    changeDue: 0
  }

  feeTypesLookupVals: SelectItem[] = [];

  public paidAmount: number = 0;

  constructor(private cumbs: BreadcrumbsService, public router: Router, private questionService: QuestionService) {
    this.load();
  }

  load() {
    this.items = [
      { label: 'Get Outstanding Fees', routerLink: '/generateStatement', icon: 'pi pi-money' }
    ];
    this.cumbs.setBreadCrumbs(this.items);
    this.defineQuestions();
  }

  getStatement() {
    this.feeTypesLookupVals = this.getLookup('feeTypes');
    this.workingTransactions = this.transactions;
  }
  public getLookup(lookupId: string) {
    return this.questionService.getMultiOptions(lookupId);
  }
  public getLookupLabel(id: string, lookupId: string): string {
    let label: string;
    switch (lookupId) {
      case 'feeTypes':
        {
          label = this.feeTypesLookupVals.find(y => y.value == id).label;
        }
        break;
    }
    return label;
  }

  defineQuestions() {
    this.formDefinitions = [];
    let formDefinitionA = new FormCreator('Recieve outstanding payments', true);
    let formDefinitionB = new FormCreator('New owner details', true);

    formDefinitionA.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
      {
        key: 'feeType',
        label: 'Collect Revenue Type',
        errorText: ' is invalid',
        order: 1,
        disabled: false
      },
      'paymentTypes',
      'Select Fee Type',
      false
    )).addValidators('feeType', [['required']]);

    formDefinitionA.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'qrCode',
        label: 'Scan QR on COR / VIC',
        errorText: ' is required!',
        order: 2,
        hidden: true,
        disabled: false
      }, 'string'))
      .addValidators('qrCode', [['required']])
      .addDependentOption('qrCode', [
        {
          dependOnId: 'feeType',
          attributes: [
            {
              attrName: 'hidden',
              conditions: [
                {
                  conditionVal: 'COR',
                  onMatchSetTo: false
                },
                {
                  conditionVal: 'VIC',
                  onMatchSetTo: false
                }
              ]
            }
          ]
        }
      ]);

    formDefinitionB.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
      {
        key: 'identificationType',
        label: 'Identification Type',
        errorText: ' is invalid',
        order: 1,
        disabled: false
      },
      'IDTypes',
      'Select ID Type',
      false
    )).addValidators('identificationType', [['required']]);

    formDefinitionB.addQuestion(new QuestionTypeNamespace.MultiOption(
      {
        key: 'country',
        label: 'Country',
        errorText: ' is invalid',
        order: 2,
        disabled: false
      }, 'countries', 'Select Country'))
      .addValidators('country', [['required']]);

    formDefinitionB.addQuestion(new QuestionTypeNamespace.InputMaskQuestion(
      {
        key: 'identificationNumber',
        label: 'Identification Number',
        errorText: ' is required!',
        order: 3,
        disabled: false
      }, 'IdMaskTypes'))
      .addValidators('identificationNumber', [['required']])
      .addDependentOption('identificationNumber', [
        {
          dependOnId: 'identificationType',
          attributes: [
            {
              attrName: 'mask',
              isBoundAttribute: true,
              conditions: [
                {
                  conditionVal: 'passportNumber',
                  onMatchSetTo: 'passportNumber'
                },
                {
                  conditionVal: 'businessRegistartionNo',
                  onMatchSetTo: 'businessRegistartionNo'
                },
                {
                  conditionVal: 'newNIC',
                  onMatchSetTo: 'newNIC'
                }
              ]
            }
          ]
        }
      ]);

    this.formDefinitions.push(formDefinitionA.container);
    this.formDefinitions.push(formDefinitionB.container);
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
}
