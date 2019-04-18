import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { AnswersService } from '../../services/answers.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'new-answer',
  templateUrl: './new-answer-modal.component.html',
  exportAs: 'newAnswerModal',
  styleUrls: ['../../styles/modals.scss']
})

export class NewAnswerModalComponent implements OnInit{

  answerForm: FormGroup;

  constructor(
    public answersService: AnswersService,
    public thisDialogRef: MatDialogRef<NewAnswerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
  ){}

  ngOnInit(): void {
    this.answerForm = new FormGroup({
      answer: new FormControl('', Validators.required)
    })
  }

  onCloseCancel() {
    this.thisDialogRef.close();
  }

  onSubmit(values){
    let data : any = {};
    data.answer = values.answer;
    data.questionId = this.modalData.questionId;
    this.answersService.createAnswer(data)
    .then(answer => {
      this.thisDialogRef.close(answer);
      this.answerForm.reset();
    })
  }

}
