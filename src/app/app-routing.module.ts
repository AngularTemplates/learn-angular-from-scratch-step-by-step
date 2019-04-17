import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CategoriesResolver } from './categories/categories.resolver';

import { CategoryQuestionsComponent } from './category-questions/category-questions.component';
import { CategoryQuestionsResolver } from './category-questions/category-questions.resolver';

import { QuestionAnswersResolver } from './question-answers/question-answers.resolver';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';


const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    resolve: {
      data: CategoriesResolver
    }
  },
  {
    path: 'questions/about/:categorySlug',
    component: CategoryQuestionsComponent,
    resolve: {
      data: CategoryQuestionsResolver
    }
  },
  {
    path: 'question/:questionSlug',
    component: QuestionAnswersComponent,
    resolve: {
      data: QuestionAnswersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
