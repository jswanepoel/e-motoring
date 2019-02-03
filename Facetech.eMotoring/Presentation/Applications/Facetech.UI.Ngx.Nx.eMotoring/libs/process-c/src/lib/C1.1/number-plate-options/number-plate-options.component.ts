import { Component, OnInit } from '@angular/core';

import { QuestionsContainer } from '@facetech/common-ui';
import { QuestionService } from 'libs/common-ui/src/lib/questions/question.service';

@Component({
  selector: 'ngx-number-plate-options',
  templateUrl: './number-plate-options.component.html',
  styleUrls: ['./number-plate-options.component.css']
})
export class NumberPlateOptionsComponent implements OnInit {

  public includeFooter: boolean = true;
  public bodyCenter = true;

  public formDefinition: QuestionsContainer;
  public questionData: any;

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.defineQuestions();
  }

  private defineQuestions(): void {
    this.formDefinition = this.questionService.getDefinition('numberplateOptions', 'SelectNumberPlateOption', '', true);
  }

}
