import { Component, OnInit } from '@angular/core';
import { QuestionService, QuestionsContainer } from '@facetech/common-ui';

@Component({
  selector: 'ngx-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent implements OnInit {

  public includeFooter: boolean = true;
  public bodyCenter = true;

  public formDefinition1: QuestionsContainer;
  public idNumber: QuestionsContainer;
  public formDefinition2: QuestionsContainer;

  constructor(private questionService: QuestionService) {
    this.defineQuestions();
  }

  ngOnInit() {
  }

  private defineQuestions(): void {
    this.formDefinition1 = this.questionService.getDefinition('entityDetail1', 'EntityDetail1', '', true);
    this.idNumber = this.questionService.getDefinition('idNumber', 'EntityDetailIDNumber', '', true);
    this.formDefinition2 = this.questionService.getDefinition('entityDetail2', 'EntityDetail2', '', true);
  }

}
