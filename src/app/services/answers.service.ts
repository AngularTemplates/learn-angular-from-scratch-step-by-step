import { Injectable } from '@angular/core';
import { AnswerApi, Answer } from '../../../sdk';


@Injectable()
export class AnswersService {
  constructor(
    private answerApi: AnswerApi
  ){}

  getAnswers(questionId){
    let query = {
     questionId: questionId
    }
   return this.answerApi.find<Answer>({where: query})
   .toPromise()
  }

  getAnswer(anserId){
    let query = {
      id: anserId
    }
    return this.answerApi.find<Answer>({where: query})
    .toPromise()
  }

  deleteAnswer(answerId){
    return this.answerApi.deleteById<Answer>(answerId).toPromise();
  }

  updateAnswer(values){
    let data = new Answer();
    data.answer = values.answer;
    data.positiveVotes = values.positiveVotes;
    data.negativeVotes = values.negativeVotes;
    data.questionId = values.questionId;
    return this.answerApi.updateAttributes<Answer>(values.id, data)
    .toPromise()
  }

  createAnswer(values){
    let data = new Answer();
    data.answer = values.answer;
    data.questionId = values.questionId;
    return this.answerApi.create<Answer>(data)
    .toPromise()
  }

  countAnswers(questionId){
    let query = {
      questionId: questionId
    }
    return this.answerApi.count({where: query})
    .toPromise()
  }
}
