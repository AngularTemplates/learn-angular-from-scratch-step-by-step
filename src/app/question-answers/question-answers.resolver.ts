import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { QuestionsService } from '../services/questions.service';

@Injectable()
export class QuestionAnswersResolver implements Resolve<any> {

  constructor(
    private questionsService: QuestionsService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    let questionSlug = route.paramMap.get('questionSlug');

    return new Promise((resolve, reject) => {
      this.questionsService.getQuestionBySlug(questionSlug)
      .then(question => {
        let breadcrumbs = [
          { url: '/', label: 'Categories' },
          { url: 'questions/about/' + question.categorySlug, label: question.categorySlug },
          { url: 'question/' + questionSlug, label: question.question }
        ];

        return resolve({
          question: question,
          breadcrumbs: breadcrumbs
        });
      },
      err => {
        console.log(err);
        return resolve(null);
      })
    });
  }
}
