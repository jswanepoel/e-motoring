import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { DependentOption, QuestionDefinition } from '../question-base.component';


@Component({
  selector: 'ngx-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css'],
  animations: [
    trigger('slideInOutQuestion', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('0.5s', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]), transition(':leave', [
        style({
          transform: 'translateX(0)',
          opacity: 1
        }),
        animate('0.5s', style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
    ]),
    trigger('slideInValidation', [
      transition(':enter', [
        style({
          maxHeight: '0px',
          opacity: 0
        }),
        animate('0.8s', style({
          maxHeight: '100%',
          opacity: 1
        }))
      ]), transition(':leave', [
        style({
          maxHeight: '100%',
          opacity: 1
        }),
        animate('0.1s', style({
          maxHeight: '0px',
          opacity: 0
        }))
      ])
    ])
  ]
})

export class DynamicQuestionComponent implements OnInit, OnDestroy {
  @Input() question: QuestionDefinition;
  @Input() form: FormGroup;
  @Input() attributes: any = {};
  @Input() set isLoading(isLoading: boolean) { this._isLoading = isLoading; };

  @ViewChild('questionRef', { read: ElementRef }) questionRef: ElementRef;

  private _isLoading: boolean = false;

  public valueSubscription: Subscription;
  public valueSubject: BehaviorSubject<any>;
  public disabled: boolean = false;
  public hidden: boolean = false;

  public get isValid(): boolean {return this.form.controls[this.question.key].valid; };

  public ngOnInit() {
    this.valueSubject = new BehaviorSubject<any>(this.question.value); //create Behavior Subject of the value in the QuestionDefinition

    this.valueSubscription = this.valueSubject.subscribe(x => { //Calling .next() on valueSubject will update the questions value
      this.form.get(this.question.key).setValue(x);
    });

    this.toggleHide(this.question.hidden); //set initial hidden or 
    this.toggleDisable(this.question.disabled); //disabled state 

    if (!isNullOrUndefined(this.question.dependentOptions)) { //if there are dependencies specified then
      this.question.dependentOptions.forEach(dependentOption => { //for each dependency specified, subscribe to the value        
        this.form.get(dependentOption.dependOnId).valueChanges.forEach((val: any) => { //each time the supporting question value, changes then
          this.handleParentValue(val, dependentOption);
        })
      })
    }
  }

  ngOnDestroy(): void {
    this.valueSubscription.unsubscribe();
  }

  handleParentValue(val: any, dependentOption: DependentOption) {
    let supportingVal: any;
    if (isNullOrUndefined(val)) {
      supportingVal = 'undefined';
    } //if the value is from a multi select then get the value from the select item then
    else {
      supportingVal = val;
      if (!isNullOrUndefined(val.value)) {
        supportingVal = val.value;
      }
    }
    this.evaluateCondition(dependentOption, supportingVal); //evaluate the condition
  }

  evaluateCondition(depOption: DependentOption, val: any) {
    depOption.attributes.forEach(attr => { //for each attribute with conditions
      let hasMatchingCondition: boolean = false;
      let matchingCondition;
      let failValue: any;

      attr.conditions.forEach(c => { //for each attribute's conditions
        if (c.conditionVal == val) { //if the supporting question's value matches the condition value then
          hasMatchingCondition = true;
          matchingCondition = c;
        } else { //if condition does NOT match          
          if (!isNullOrUndefined(c.onFailSetTo)) { //if a fail value was set, use it
            failValue = c.onFailSetTo;
          } else if ((c.onMatchSetTo == 'true') || (c.onMatchSetTo == 'false')) { //if no fail value set and match value is bool then reverse match value
            failValue = !c.onMatchSetTo;
          }
        }
      });

      if (hasMatchingCondition) {
        if ((attr.attrName == 'disabled') || (attr.attrName == 'hidden')) { //if it is a hide/disable condition then
          this.hideOrDisable(attr.attrName, matchingCondition.onMatchSetTo); //hide or disable the question
        } else { //if not hide/disable
          this.onConditionMatch(attr.attrName, matchingCondition.onMatchSetTo); //set attribute
        }
      }
      else {
        if ((attr.attrName == 'disabled') || (attr.attrName == 'hidden')) { //if it is a hide/disable condition then
          this.hideOrDisable(attr.attrName, failValue); //hide or disable the question
        } else { //if not hide/disable
          this.onConditionFail(attr.attrName, failValue); //set attribute
        }
      }
    });
  }

  onConditionMatch(attributeName, onMatchValue) {
    this.attributes[attributeName] = this.getAttrValFromList(onMatchValue) ? this.getAttrValFromList(onMatchValue).value : onMatchValue;
  }

  onConditionFail(attributeName, onFailValue) {
    let existsInAttributes: boolean = !isNullOrUndefined(this.attributes[attributeName]);
    let hasFailVal: boolean = !isNullOrUndefined(onFailValue);
    if (existsInAttributes) {
      if (hasFailVal) {
        this.attributes[attributeName] = onFailValue;
      } else {
        delete this.attributes[attributeName];
      }
    }    
  }

  hideOrDisable(attributeName, newValue) {
    switch (attributeName) {
      case 'disabled':
        {
          this.toggleDisable(newValue);
          break;
        }
      case 'hidden':
        {
          this.toggleHide(newValue);
          break;
        }
      default:
    }
  }

  getAttrValFromList(val: string) {
    try {
      return this.question.questionOptions.multiOptions.find(item => ((item.value == val) || (item.label == val)));
    } catch {
      return undefined;
    }

  }

  toggleHide(setTo) {//disable AND hide to avoid validation errors from hidden values.
    this.hidden = setTo;
    this.form.controls[this.question.key].reset();
    this.hidden ? this.form.controls[this.question.key].disable() : this.form.controls[this.question.key].enable();
  }

  toggleDisable(val: boolean) {
    if (val) {
      this.form.controls[this.question.key].disable();
    } else {
      this.form.controls[this.question.key].enable();
    }
  }
  
}
//the below comments are for later development
//    else {
//      if (!isNullOrUndefined(this.questionRef.nativeElement[attributeName])) {
//        if (hasFailVal) {
//          this.questionRef.nativeElement[attributeName] = onFailValue;
//        } else {
//          delete this.questionRef.nativeElement[attributeName];
//        }
//      }
//    }
//setNativeElementAttribute(attr, cond) {
//    this.questionRef.nativeElement[attr.attrName] = this.getAttrValFromList(cond.onMatchSetTo) ? this.getAttrValFromList(cond.onMatchSetTo).value :
//      cond.onMatchSetTo;
//  }
