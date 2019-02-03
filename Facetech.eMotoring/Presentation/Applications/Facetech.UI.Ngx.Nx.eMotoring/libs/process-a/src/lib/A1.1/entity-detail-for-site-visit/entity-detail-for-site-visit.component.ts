import { Component, OnInit } from '@angular/core';
import { QuestionService, QuestionsContainer } from '@facetech/common-ui';

@Component({
  selector: 'ngx-entity-detail-for-site-visit',
  templateUrl: './entity-detail-for-site-visit.component.html',
  styleUrls: ['./entity-detail-for-site-visit.component.css']
})
export class EntityDetailForSiteVisitComponent implements OnInit {

  public includeFooter: boolean = true;
  public bodyCenter = true;

  public formDefinition: QuestionsContainer;

  constructor(private questionService: QuestionService) {
    this.defineQuestions();
  }

  ngOnInit() {
  }

  private defineQuestions(): void {
    this.formDefinition = this.questionService.getDefinition('contactDetailForSiteVisit', 'ContactDetailForSiteVisit', '', true);
  }

}
