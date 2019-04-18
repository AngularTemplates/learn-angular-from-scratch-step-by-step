import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'delete-question-modal',
  templateUrl: 'delete-question-modal.component.html',
  styleUrls: ['../../styles/modals.scss']
})

export class DeleteQuestionModalComponent {
  constructor(
    public thisDialogRef: MatDialogRef<DeleteQuestionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public questionsService: QuestionsService
  ){}

  onCloseConfirm() {
    this.questionsService.deleteQuestion(this.modalData.questionId)
    .then(res => {
      this.thisDialogRef.close(true);
    })
  }

  onCloseCancel() {
    this.thisDialogRef.close(false);
  }

}
