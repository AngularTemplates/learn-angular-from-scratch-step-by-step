import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import { AnswersService } from '../services/answers.service';
import { Question } from '../../../sdk/models/Question';
import { MatDialog } from '@angular/material';
import { DeleteQuestionModalComponent } from './delete-question/delete-question-modal.component';
import { NewQuestionModalComponent } from './new-question/new-question-modal.component';

@Component({
  selector: 'category-questions',
  styleUrls: ['./category-questions.scss'],
  templateUrl: './category-questions.component.html'
})

export class CategoryQuestionsComponent implements OnInit{

  questions: Array<Question>;
  categoryTitle: string;
  categorySlug: any;

  constructor(
    private route: ActivatedRoute,
    public questionsService: QuestionsService,
    public answersService: AnswersService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.questions = data.questions;
        this.categoryTitle = data.category_title;
        this.categorySlug = data.category_slug;
      }
    })
  }

  getQuestions(){
    this.questionsService.getQuestionsByCategory(this.categorySlug)
    .then(questions => this.questions = questions);
  }

  openNewQuestionModal(categorySlug){
    let dialogRef = this.dialog.open(NewQuestionModalComponent, {
      data: { categorySlug: categorySlug }
    });

    dialogRef.afterClosed().subscribe(question => {
      if(question){
        this.addQuestionToList(question);
      }
    })
  }

  delete(questionId){
    let dialogRef = this.dialog.open(DeleteQuestionModalComponent, {
      data: { questionId: questionId }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm){
        // refresh the questions list
        var index = this.questions.findIndex((question) => question.id === questionId);
        this.questions.splice(index, 1);

        // TODO: evaluar cambiar esto por un operation method en loopback.
        this.answersService.getAnswers(questionId)
        .then(answers => {
          for(let answer of answers){
            this.answersService.deleteAnswer(answer.id);
          }
        })
      }
    });
  }

  addQuestionToList(question){
    this.questions.push(question);
  }

  addPositiveVote(question){
    question.positiveVotes += 1;
    this.questionsService.updateQuestion(question);
  }

  addNegativeVote(question){
    question.negativeVotes += 1;
    this.questionsService.updateQuestion(question);
  }

}
