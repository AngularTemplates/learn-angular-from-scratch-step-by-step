import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswersService } from '../services/answers.service'
import { Question } from '../../../sdk/models/Question';
import { MatDialog } from '@angular/material';
import { DeleteAnswerModalComponent } from './delete-answer/delete-answer-modal.component';
import { NewAnswerModalComponent } from './new-answer/new-answer-modal.component';
import { UpdateAnswerModalComponent } from './update-answer/update-answer-modal.component';

@Component({
  selector: 'answer',
  styleUrls: ['./question-answers.scss'],
  templateUrl: './question-answers.component.html'
})

export class QuestionAnswersComponent {

  question: Question;

  constructor(
    private answersService: AnswersService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.question = data.question;
      }
    })
  }

  openNewAnswerModal(questionId){
    let dialogRef = this.dialog.open(NewAnswerModalComponent, {
      data: { questionId: questionId }
    });

    dialogRef.afterClosed().subscribe(answer => {
      if(answer){
        this.addAnswerToList(answer);
      }
    })
  }

  openUpdateAnswerModal(answer){
    let dialogRef = this.dialog.open(UpdateAnswerModalComponent, {
      data: { answer: answer }
    });

  }

  delete(answerId){
    let dialogRef = this.dialog.open(DeleteAnswerModalComponent, {
      data: { answerId: answerId }
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if(confirm){
        var index = this.question.answers.findIndex((answer) => answer.id === answerId);
        this.question.answers.splice(index, 1);
      }
    })

  }

  addPositiveVote(answer){
    answer.positiveVotes += 1;
    this.answersService.updateAnswer(answer);
  }

  addNegativeVote(answer){
    answer.negativeVotes += 1;
    this.answersService.updateAnswer(answer);
  }

  addAnswerToList(answer){
    this.question.answers.push(answer);
  }

}
