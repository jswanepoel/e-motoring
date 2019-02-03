import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, Validator } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';

import { QuestionDefinition, QuestionsContainer } from './question-base.component';
import { QuestionService } from './question.service';

@Injectable()
export class QuestionControlService {

  constructor(private lookupService: QuestionService) { }
  //dependentsRef: DependentsRef = new DependentsRef();
  depRef: any = {}

  public toFormGroup(questions: QuestionsContainer): FormGroup {

    questions.questionDefinitions.sort((x, y) => x.order - y.order);
    let group: any = {};

    questions.questionDefinitions = questions.questionDefinitions.map(question => {
      group[question.key] = question.validators ?
        new FormControl({ value: question.value, disabled: question.disabled || false },
          question.validators.map(x => {
            let y = x.length > 1 ? Validators[x[0]](x[1]) : Validators[x[0]];  // This checks if there are parameters for the validator.
            return y;
          }))
        : new FormControl({ value: question.value, disabled: question.disabled || false });
      question.value = new BehaviorSubject<any>(question.value);

      this.getLookupValues(question);

      if ((!isNullOrUndefined(question.questionOptions['includeOther'])) && (question.questionOptions['includeOther'] == true)) {
        question.questionOptions.multiOptions.push( { value: '0', label: 'Other' } );
      }

      if (question.controlType == 'multi') {
        if (question.questionOptions.multiOptions.length > 3) {
          question.controlType = 'dropdown';
        }
        else {
          question.controlType = 'radio';
        }
      }
      return question;
    });
    if (!isNullOrUndefined(questions.dependantQuestionGroups)) {
      questions = this.setGroupDependencies(questions);
    }
    return new FormGroup(group);
  }

  private setGroupDependencies(questions: QuestionsContainer): QuestionsContainer {

    questions.questionDefinitions.forEach(questionDef => {
      let relatedGroupDefinitions = questions.dependantQuestionGroups.filter(dqg => dqg.questionIds.some(qID => qID == questionDef.key)); //get any group definitions where this question is present

      if (relatedGroupDefinitions.length > 0) {
        relatedGroupDefinitions.forEach(relatedGroup => {
          relatedGroup.dependentOptions.forEach(relatedGroupOption => {
            let qDepOption = questionDef.dependentOptions.find(qDepOption => qDepOption.dependOnId == relatedGroupOption.dependOnId);

            if (!isNullOrUndefined(qDepOption)) {
              relatedGroupOption.attributes.forEach(relatedAttribute => {
                let qAttr = qDepOption.attributes.find(qAttr => qAttr.attrName == relatedAttribute.attrName);

                if (!isNullOrUndefined(qAttr)) {
                  relatedAttribute.conditions.forEach(relatedCondition => {
                    let qCondition = qAttr.conditions.find(qCondition => qCondition.conditionVal == relatedCondition.conditionVal);

                    if (!isNullOrUndefined(qCondition)) {
                      if (qCondition.onMatchSetTo != relatedCondition.onMatchSetTo) {
                        throw `Error in question control while adding group dependency conflicting on match values
                               Question key: `+ questionDef.key + `
                               Depend on key: `+ qDepOption.dependOnId + `
                               Attribute: `+ qAttr.attrName + `
                              `;
                      }
                    } else {
                      qAttr.conditions.push(relatedCondition);
                    }
                  })
                } else {
                  qDepOption.attributes.push(relatedAttribute)
                }
              })
            } else {
              questionDef.dependentOptions.push(relatedGroupOption);
            }
          })
        })
      }
    });
    return questions;
  }

  private getLookupValues(question: QuestionDefinition): void {
    if (!isNullOrUndefined(question.questionOptions.lookupKey)) {
      question.questionOptions['lookupKey'] = question.questionOptions.lookupKey;
      question.questionOptions['multiOptions'] = this.lookupService.getMultiOptions(question.questionOptions.lookupKey);
    }
    else if (!isNullOrUndefined(question.questionOptions.multiOptions)) {
      question.questionOptions['lookupKey'] = question.questionOptions.lookupKey;
      question.questionOptions['multiOptions'] = question.questionOptions.multiOptions;
    }
  }
}
