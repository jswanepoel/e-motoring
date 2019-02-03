import { isNullOrUndefined, isNull } from "util";
import { BehaviorSubject } from "rxjs";

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  errorText: string;
  disabled: boolean;
  hidden: boolean;

  validators: Array<Array<string>>;
  dependentOptions: DependentOption[];

  questionOptions: any = {};

  constructor(definition: QuestionDefinition) {
    this.value = definition.value || undefined;

    this.key = definition.key || '';
    this.label = definition.label || '';
    this.errorText = definition.errorText;
    this.order = definition.order === undefined ? 1 : definition.order;
    this.disabled = definition.disabled || false;
    this.hidden = definition.hidden || false;
    this.validators = definition.validators;
    this.dependentOptions = definition.dependentOptions || [];
    this.questionOptions = definition.questionOptions || {};
    //this.defaultMask = options.defaultMask || 'no mask set';
    // this.selectItems = options.selectItems;
    // this.textInputType = options.textInputType;
    //this.optionsKey = options.optionsKey;
  }
}

export interface QuestionsContainer {

  formName: string;
  isNew: boolean;
  dependantQuestionGroups?: Array<{ questionIds: Array<string>, dependentOptions: Array<DependentOption> }>;
  questionDefinitions: Array<QuestionDefinition>;
  componentDefinitions?: Array<any>;

}

export interface DependentOption {
  dependOnId: string;
  attributes: DependentAttribute[];
}

export interface DependentAttribute {
  attrName: string;
  isBoundAttribute?: boolean;
  conditions: Condition[];
}

export interface Condition {
  attrVal?: string;
  conditionVal?: string;
  controlPropName?: string;
  default?: boolean;
  optionKey?: string;
  onMatchSetTo?: any;
  onFailSetTo?: any;
}

export interface ComponentDefinition {
  key:string,
  componentType: string,  
  order: number,
  data?: BehaviorSubject<any>,
  hidden?: boolean,
  dependentOptions?: DependentOption[]
}

export interface QuestionDefinition {
  key: string,
  label: string,
  errorText: string,
  order: number,
  value?: any,
  disabled?: boolean,//initial state
  hidden?: boolean,//initial state
  //optionsKey?: string,
  //selectItems?: Array<any>,
  validators?: Array<Array<string>>,
  dependentOptions?: DependentOption[],
  questionOptions?: any,
  controlType?: any
}



export class FormCreator {
  container: QuestionsContainer = {} as QuestionsContainer;

  constructor(formName: string, isNew?: boolean | true) {
    this.container.formName = formName;
    this.container.isNew = isNew;
  }

  addGroupDependants(grpName: string, grpDef: { questionIds: Array<string>, dependentOptions: Array<DependentOption> }) {
    if (isNullOrUndefined(this.container.dependantQuestionGroups)) {
      this.container.dependantQuestionGroups = [grpDef];
    }
    else {
      this.container.dependantQuestionGroups.push(grpDef);
    }
    return this;
  }

  addQuestion(questionDefinition: QuestionDefinition) {
    if (isNullOrUndefined(this.container.questionDefinitions)) {
      this.container.questionDefinitions = [questionDefinition];
    }
    else {
      this.container.questionDefinitions.push(questionDefinition);
    }
    return this;
  }

  addValidators(questionKey: string, validators: string[][]) {
    let question: QuestionDefinition;
    let validator: string[];
    question = this.container.questionDefinitions.find(x => x.key == questionKey);
    if (isNullOrUndefined(question)) {//check if question is defined
      console.log(
        `Validators:
        ${JSON.stringify(validators)}
         were not added.
         The question:
        ${questionKey}
         was not defined before this call.`);
    }
    else {      //if question does exist
      validators.forEach(vali => {
        validator = question.validators ? question.validators.find(x => x == vali) : null;
        if (isNullOrUndefined(validator)) {
          isNull(validator) ? question.validators = [vali] :
            question.validators.push(vali);
        }
        validator = undefined;
      })
    }
    return this;
  }

  addDependentOption(questionKey: string, dependantOptions: Array<DependentOption>) {
    let question: QuestionDefinition;
    let option: DependentOption;
    question = this.container.questionDefinitions.find(x => x.key == questionKey);
    if (isNullOrUndefined(question)) {//check if question is defined
      console.log(
        `Dependant Option:
        ${JSON.stringify(dependantOptions)}
         was not added.
         The question:
        ${questionKey}
         was not defined before this call.`);
    }
    else {      //if question does exist
      dependantOptions.forEach(dependantOption => {
        option = question.dependentOptions.find(x => x.dependOnId == dependantOption.dependOnId);
        if (isNullOrUndefined(option)) {
          question.dependentOptions.push(dependantOption);
        }
        else {
          dependantOption.attributes.forEach(newAttr => {
            option.attributes.push(newAttr);
          })
        }
      })
    }
    return this;
  }

  addComponent(componentDefinition: ComponentDefinition) {
    if (isNullOrUndefined(this.container.componentDefinitions)) {
      this.container.componentDefinitions = [componentDefinition];
    }
    else {
      this.container.componentDefinitions.push(componentDefinition);
    }
    return this;
  }

}


//


