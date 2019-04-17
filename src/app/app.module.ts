import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CategoriesComponent } from './categories/categories.component';
import { CategoriesResolver } from './categories/categories.resolver';
import { CategoriesService } from './services/categories.service';

import { CategoryQuestionsResolver } from './category-questions/category-questions.resolver';
import { CategoryQuestionsComponent } from './category-questions/category-questions.component';
import { NewQuestionModalComponent } from './category-questions/new-question/new-question-modal.component';
import { DeleteQuestionModalComponent } from './category-questions/delete-question/delete-question-modal.component';
import { QuestionsService } from './services/questions.service';

import { NewAnswerModalComponent } from './question-answers/new-answer/new-answer-modal.component';
import { UpdateAnswerModalComponent } from './question-answers/update-answer/update-answer-modal.component';
import { DeleteAnswerModalComponent } from './question-answers/delete-answer/delete-answer-modal.component';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';
import { QuestionAnswersResolver } from './question-answers/question-answers.resolver';
import { AnswersService } from './services/answers.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryQuestionsComponent,
    NewQuestionModalComponent,
    NewAnswerModalComponent,
    UpdateAnswerModalComponent,
    QuestionAnswersComponent,
    DeleteQuestionModalComponent,
    DeleteAnswerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  entryComponents: [
    DeleteQuestionModalComponent,
    DeleteAnswerModalComponent,
    NewQuestionModalComponent,
    NewAnswerModalComponent,
    UpdateAnswerModalComponent
  ],
  providers: [
    CategoriesService,
    QuestionsService,
    AnswersService,
    CategoryQuestionsResolver,
    CategoriesResolver,
    QuestionAnswersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
