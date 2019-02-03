import { Component, Input, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase, QuestionsContainer } from '../question-base.component';
import { QuestionControlService } from '../question-control.service';
import { Observable, Subject } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { QuestionService } from '../question.service';


@Component({
  selector: 'ngx-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls:['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() formDefinition: QuestionsContainer;
  @Input() header: string;
  private _questionData: any;
  public isLoading: boolean;

  @Input() set questionData(questionData: any) {
    if (!isNullOrUndefined(questionData)) {
      this._questionData = questionData;
      this.loadQData();
    }
  }

  public get isFormValid() { return this.form.valid; };

  public form: FormGroup;
  public payLoad;

  constructor(private qcs: QuestionControlService, private questionService: QuestionService) {
  }

  public ngOnInit() {    
    this.isLoading = !this.formDefinition.isNew;
    this.form = this.qcs.toFormGroup(this.formDefinition);
  }
  
  public onSubmit():any {
    this.payLoad = JSON.stringify(this.form.value);
    return this.payLoad;
  }

  public loadQData() {
    //this.form.reset();

    ////(<FormGroup>this.form)
    ////  .setValue(this._questionData, { onlySelf: true });

    this.formDefinition.questionDefinitions.forEach(question => {
      let qData =  this._questionData[question.key] || undefined;
      
      if (qData) {
        question.value.next(qData);
      }
    });
    this.isLoading = false;
  }
}
