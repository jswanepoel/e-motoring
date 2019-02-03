import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItem, SelectItem } from 'primeng/api';

import {
  QuestionService,
  BreadcrumbsService,
  DynamicFormComponent,
  QuestionTypeNamespace,
  FormCreator,
  QuestionsContainer
} from '@facetech/common-ui';
import { FinanceModels } from '../../Interfaces';


@Component({
  selector: 'ngx-payment-and-receipt',
  templateUrl: './payment-and-receipt.component.html',
  styleUrls: ['./payment-and-receipt.component.css']
})
/** PaymentAndReceipt component*/
export class PaymentAndReceiptComponent {
  @ViewChild('contentSize') contentSize: ElementRef; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  @ViewChild('formDir1') _formDir1: DynamicFormComponent;
  @ViewChild('formDir2') _formDir2: DynamicFormComponent;
  @ViewChild('QRForm') _QRForm: DynamicFormComponent;

  private items: MenuItem[];
  public currentStep: string = '0';
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
  private scannedQRCode: number;

  public workingTransactions = [];
  public selectedTransactions: Array<FinanceModels.IFee> = [];

  public questionData: any = {};
  qDataSub: Subscription;

  makingPayment: boolean = false;
  qrCodeScanned: boolean = false;
  paymentSuccess: boolean = false;

  public paymentData = {
    paymentType: { label: 'None', value: 'none' },
    paymentAmount: 0,
    notificationType: null,
    changeDue: 0
  }

  feeTypesLookupVals: SelectItem[] = [];

  public paidAmount: number = 0;

  constructor(
    private cumbs: BreadcrumbsService,
    public router: Router,
    private questionService: QuestionService) {
    this.load();
  }

  load() {
    this.selectBC();
    this.defineQuestions();    
  }

  selectBC() {
    switch (this.currentStep) {
      case '0': {
        this.items = [
          { label: 'Payment', disabled: true, icon: 'pi pi-money-bill' },
          { label: 'Scan QR', icon: 'pi pi-user' },
          { label: 'Review Details', icon: 'pi pi-user', disabled: true },
          { label: 'Select Fees', icon: 'pi pi-list', disabled: true },
          { label: 'Collect Payment', icon: 'pi pi-money-bill', disabled: true }
        ];
        break;
      }
      case '1': {
        this.items = [
          { label: 'Payment', disabled: true, icon: 'pi pi-money-bill' },
          { label: 'Scan QR', icon: 'pi pi-user', disabled: true },
          { label: 'Review Details', icon: 'pi pi-user'},
          { label: 'Select Fees', icon: 'pi pi-list', disabled: true },
          { label: 'Collect Payment', icon: 'pi pi-money-bill', disabled: true }
        ];
        break;
      }
      case '2': {
        this.items = [
          { label: 'Payment', disabled: true, icon: 'pi pi-money-bill' },
          { label: 'Scan QR', icon: 'pi pi-user', disabled: true },
          { label: 'Review Details', icon: 'pi pi-user', disabled: true },
          { label: 'Select Fees', icon: 'pi pi-list'},
          { label: 'Collect Payment', icon: 'pi pi-money-bill', disabled: true  }
        ];
        break;
      }
      case '3': {
        this.items = [
          { label: 'Payment', disabled: true, icon: 'pi pi-money-bill' },
          { label: 'Scan QR', icon: 'pi pi-user', disabled: true },
          { label: 'Review Details', icon: 'pi pi-user', disabled: true },
          { label: 'Select Fees', icon: 'pi pi-list', disabled: true },
          { label: 'Collect Payment', icon: 'pi pi-money-bill' }
        ];
        break;
      }
      default:
    }    
    this.cumbs.setBreadCrumbs(this.items);
  }

  ngAfterViewInit(): void {
    // this.qDataSub = this.questionService.getQuestionData().subscribe(x => { this.questionData = x });
  }
  public transactionsSelected(selectedTransactions) {
    this.selectedTransactions = selectedTransactions;
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
    this.formDefinitions = [];

    let formDefinitionA = new FormCreator('Recieve outstanding payments', true);
    let QRformDefinition = new FormCreator('QR Code', true);

    QRformDefinition.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'qrCode',
        label: 'QR Code',
        errorText: ' is required!',
        order: 2,
        hidden: false,
        disabled: false
      },
      'string'
    )).addValidators('qrCode', [['required']]);

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

    //formDefinitionB.addQuestion(new QuestionTypeNamespace.DropdownQuestion(
    //  {
    //    key: 'identificationType',
    //    label: 'Identification Type',
    //    errorText: ' is invalid',
    //    order: 1,
    //    disabled: false
    //  }, 'IDTypes', 'Select ID Type'))
    //  .addValidators('identificationType', [['required']]);

    //formDefinitionB.addQuestion(new QuestionTypeNamespace.MultiOption(
    //  {
    //    key: 'country',
    //    label: 'Country',
    //    errorText: ' is invalid',
    //    order: 2,
    //    disabled: false
    //  }, 'countries', 'Select Country'))
    //  .addValidators('country', [['required']]);

    //formDefinitionB.addQuestion(new QuestionTypeNamespace.InputMaskQuestion(
    //  {
    //    key: 'identificationNumber',
    //    label: 'Identification Number',
    //    errorText: ' is required!',
    //    order: 3,
    //    disabled: false
    //  }, 'IdMaskTypes'))
    //  .addValidators('identificationNumber', [['required']])
    //  .addDependentOption('identificationNumber', [
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
    //        }
    //      ]
    //    }
    //  ]);

    this.formDefinitions.push(formDefinitionA.container);
    this.formDefinitions.push(QRformDefinition.container);
  }

  qrCodeScanDone() {

    this._QRForm.onSubmit();
    console.log(this._QRForm.payLoad[0]);
    this.scannedQRCode = JSON.parse(this._QRForm.payLoad).qrCode;
    this.qrCodeScanned = !this.qrCodeScanned;
    this.currentStep = '1';
    this.selectBC();
    //this.getStatement();
  }

  generateOPS() {
    this.currentStep = '2';
    this.selectBC();
    this.feeTypesLookupVals = this.getLookup('feeTypes');
    this.workingTransactions = this.transactions;
  }

  public getTotalTax(): number {
    let totTax = 0;

    this.selectedTransactions.forEach(tx =>
      totTax += tx.amount * (tx.taxpercentage / 100)
    );
    return totTax;
  }

  public getTotalAmount(): number {
    let totInclTax = 0;
    this.selectedTransactions.forEach(tx =>
      totInclTax += tx.amount + tx.amount * (tx.taxpercentage / 100)
    );
    return totInclTax;
  }

  public getChange(): number {
    return (this.getTotalAmount() - this.paidAmount)
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

  public capturePayment() {
    this.currentStep = '3';
    this.selectBC();

    this.workingTransactions = this.selectedTransactions;
    this.makingPayment = true;
    this.paymentData.paymentAmount = this.getTotalAmount();
  }

  public changeSelected() {
    this.workingTransactions = this.transactions;
    this.makingPayment = false;
  }

  public cancelAll() {
    this.currentStep = '0';
    this.entityData = {};
    this.paidAmount = 0;
    this.workingTransactions = [];
    this.selectedTransactions = [];
    this.makingPayment = false;
    //this.paymentTypeSelected = false;
    this.qrCodeScanned = false;
    this.paymentSuccess = false;
    this.paymentData.paymentAmount = 0;
  }

  public makePayment() {
    this.paymentSuccess = true;
  }

}
