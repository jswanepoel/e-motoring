import { Component, ElementRef, ViewChild } from '@angular/core';
import { QuestionTypeNamespace, FormCreator, QuestionsContainer, DynamicFormComponent } from '@facetech/common-ui';
import { trigger, transition, style, animate } from '@angular/animations';
import { InputText, InputTextarea } from 'primeng/primeng';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'ngx-shift-management',
    templateUrl: './shift-management.component.html',
  styleUrls: ['./shift-management.component.css']
})
/** ShiftManagement component*/
export class ShiftManagementComponent {

  @ViewChild('contentSize') contentSize: ElementRef; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  @ViewChild('userName') userNameRef: DynamicFormComponent;
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()

  formDefinitions: Array<QuestionsContainer> = [];
  userFound: boolean = false;

  isClosingShift: boolean = false;
  isOpeningShift: boolean = false;
  
  dataForModel: {
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
  } = {
      userName: '',
      selectedUser: {
        firstName: '',
        surname: '',
        role: '',
        isOnShift: false
      },
      floatDetails: {
        denominations: [],
        total:0
      }
    };

  

  constructor() {
    this.defineQuestions();
  }

  public getCashier() {
    this.userNameRef.onSubmit();
    this.dataForModel.userName = this.userNameRef.payLoad;
    // if (this.userName["userLoginName"] == 'test') {
    
    this.dataForModel.selectedUser = {
      firstName: 'Johan',
      surname: 'Swart',
      role: 'Cashier',
      isOnShift : false
    };
    this.userFound = true;
    
  }

  

  private changeShift() {
    if (this.dataForModel.selectedUser.isOnShift) {
      this.startShift();
    } else {
      this.endShift();
      
    }
  }

  private startShift() {
    this.isOpeningShift = false;
    this.isClosingShift = true;    
    //redirect to start shift component
  }

  private endShift() {
    this.isClosingShift = false;
    this.isOpeningShift = true;
    //redirect to end shift component
  }

  private defineQuestions(): void {
    let userNameFormDef = new FormCreator('Cashier Search', true);
    let floatAmountFormDef = new FormCreator('Cashier Search', true);
    //let order = 1;

   
    userNameFormDef.addQuestion(new QuestionTypeNamespace.TextboxQuestion(
      {
        key: 'userLoginName',
        label: 'User login name',
        errorText: ' is required!',
        order: 1,
        disabled: false
      },
      'text'
    )).addValidators('userLoginName', [['required']]);

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

    this.formDefinitions.push(userNameFormDef.container);
    this.formDefinitions.push(floatAmountFormDef.container);
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
