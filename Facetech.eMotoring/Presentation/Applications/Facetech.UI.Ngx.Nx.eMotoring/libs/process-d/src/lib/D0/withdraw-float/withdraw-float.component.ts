import { Component, ElementRef, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormCreator, QuestionTypeNamespace, QuestionsContainer } from '@facetech/common-ui';

@Component({
  selector: 'ngx-withdraw-float',
  templateUrl: './withdraw-float.component.html',
  styleUrls: ['./withdraw-float.component.css']
})
/** FloatWithdrawl component*/
export class WithdrawFloatComponent {


  @ViewChild('contentSize') contentSize: ElementRef; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()

  

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

  formDefinition: QuestionsContainer;
  constructor() {
    this.defineQuestions();
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

    this.formDefinition = formDefinition.container;
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
