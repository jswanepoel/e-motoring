import { Component, OnInit } from '@angular/core';
import { QuestionService, QuestionsContainer } from '../questions';

@Component({
  selector: 'ngx-site-visit-detail',
  templateUrl: './site-visit-detail.component.html',
  styleUrls: ['./site-visit-detail.component.css']
})
export class SiteVisitDetailComponent implements OnInit {

  public includeFooter: boolean = true;
  public bodyCenter = true;

  public formDefinition: QuestionsContainer;

  constructor(private questionService: QuestionService) {
    this.defineQuestions();
  }

  ngOnInit() {
  }

  private defineQuestions(): void {
    this.formDefinition = this.questionService.getDefinition('siteVisitDetail', 'SiteVisitDetail', '', true);
  }

}
