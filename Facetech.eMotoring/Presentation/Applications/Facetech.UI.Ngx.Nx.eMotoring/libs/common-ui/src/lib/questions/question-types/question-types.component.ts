import { QuestionBase, QuestionDefinition } from '../question-base.component';

export namespace QuestionTypeNamespace {

  export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';

    constructor(definition: QuestionDefinition, textInputType: string) {
      super(definition);
      this.questionOptions = {
        textInputType: textInputType
      }
    }
  }

  // Under Construction!!
  export class TextareaQuestion extends QuestionBase<string> {
    controlType = 'textarea';

    constructor(definition: QuestionDefinition, placeholder: string, maxlength: number) {
      super(definition);
      this.questionOptions = {
        placeholder: placeholder,
        maxlength: maxlength 
      }
    }
  }

  export class MultiOption extends QuestionBase < string > {
    controlType = 'multi';

    constructor(definition: QuestionDefinition, lookupkey: string, placeholder: string, multioptions?: any) {
      super(definition);
      this.questionOptions = {
        lookupKey: lookupkey,
        multiOptions: multioptions,
        placeHolder: placeholder
      };
    }
  }

  export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';

    constructor(definition: QuestionDefinition, lookupkey: string, placeholder: string, includeOther: boolean, multioptions?: any) {
      super(definition);
      this.questionOptions = {
        lookupKey: lookupkey,
        placeHolder: placeholder,
        includeOther: includeOther,
        multiOptions: multioptions
      };
    }
  }

  export class ListBoxQuestion extends QuestionBase<string> {
    controlType = 'listbox';

    constructor(definition: QuestionDefinition, lookupkey: string, multioptions?: any) {
      super(definition);
      this.questionOptions = {
        lookupKey: lookupkey,
        multiOptions: multioptions
      };
    }
  }

  export class InputMaskQuestion extends QuestionBase<string> {
    controlType = 'inputMask';
    constructor(definition: QuestionDefinition, lookupkey: string, multioptions?:any) {
      super(definition);
      this.questionOptions = {
        lookupKey: lookupkey,
        multiOptions: multioptions
      };
    }
  }

  export class DateQuestion extends QuestionBase<string> {
    controlType = 'date';
    constructor(definition: QuestionDefinition, icon?: string) {
      super(definition);
      this.questionOptions = {
        icon: icon
      }
    }
  }
  export class RadioQuestion extends QuestionBase<string> {
    controlType = 'radio';
    constructor(definition: QuestionDefinition, lookupkey: string, multioptions?: any) {
      super(definition);
      this.questionOptions = {
        lookupKey: lookupkey,
        multiOptions: multioptions
      };
    }
  }
}
