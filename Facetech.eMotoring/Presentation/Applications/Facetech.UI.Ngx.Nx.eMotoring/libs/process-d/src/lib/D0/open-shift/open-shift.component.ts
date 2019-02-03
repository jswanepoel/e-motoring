import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { QuestionsContainer, FormCreator, QuestionTypeNamespace, DynamicFormComponent } from '@facetech/common-ui';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'ngx-open-shift',
  templateUrl: './open-shift.component.html',
  styleUrls: ['./open-shift.component.css'],
  animations: [
    trigger('slideInValidation', [
      transition(':enter', [
        style({ maxHeight: '0px', opacity: 0 }),
        animate('0.8s', style({ maxHeight: '100%', opacity: 1 }))
      ]), transition(':leave', [
        style({ maxHeight: '100%', opacity: 1 }),
        animate('0.1s', style({ maxHeight: '0px', opacity: 0 }))
      ])
    ])
  ]
})
export class OpenShiftComponent implements OnInit {

  expectedFloatAmount:number = 800;
  @Input() shiftDetails: {
    userName: string,
    selectedUser: {
      firstName: string,
      surname: string,
      role: string,
      isOnShift: boolean
    },
    floatDetails: {
      denominations: Array<{
        id: string,
        value: number,
        amount: number
      }>,
      total: number
    }
  };

  formDefinition: QuestionsContainer;
  public floatMatch: boolean = false;
  constructor() {
    this.defineQuestions();
  }

  ngOnInit() {
    this.shiftDetails.floatDetails.denominations = this.getDenominations();
  }

  public getTotalFloat(): number {
    let tot = 0;
      //this.expectedFloatAmount.onSubmit();
      this.shiftDetails.floatDetails.total = this.expectedFloatAmount;
        //JSON.parse(this.expectedFloatAmount.payLoad).floatAmount;
      //console.log(this.expectedFloatAmount.payLoad);
   
    this.shiftDetails.floatDetails.denominations.forEach(x => { tot += (x.value?x.value:0) * (x.amount?x.amount:0) });
    if (tot == this.shiftDetails.floatDetails.total) {
      this.floatMatch = true;
    }
    else {
      this.floatMatch = false;
    }
    return tot;
  }

  public formatCurrency(num: number): string {
    return Intl.NumberFormat('en-US',
      {
        style: 'currency',
        currency: 'LKR',
        minimumFractionDigits: 2
      }
    ).format(num);
  }

  public isValid(val: any, t: any): boolean {
    let rtnVal = false;
    isNullOrUndefined(val) ?
      rtnVal = false :
      (val.length < 1) ?
        rtnVal = false :
        rtnVal = true;
    return rtnVal;
  }

  private defineQuestions(): void {
    let floatAmountFormDef = new FormCreator('Cashier Search', true);

    floatAmountFormDef.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'floatAmount',
        label: 'Enter float amount',
        errorText: ' ',
        order: 1,
        disabled: false
      },
      'text'
    )).addValidators('floatAmount', [['required']]);

    this.formDefinition = floatAmountFormDef.container;
  }

  private getDenominations() {
    return [
      {
        id: '0',
        value: 1,
        amount: undefined
      },
      {
        id: '1',
        value: 2,
        amount: undefined
      },
      {
        id: '2',
        value: 5,
        amount: undefined
      },
      {
        id: '3',
        value: 10,
        amount: undefined
      },
      {
        id: '4',
        value: 20,
        amount: undefined
      }, {
        id: '5',
        value: 50,
        amount: undefined
      }, {
        id: '6',
        value: 100,
        amount: undefined
      }, {
        id: '7',
        value: 200,
        amount: undefined
      }
    ]
  }

}
