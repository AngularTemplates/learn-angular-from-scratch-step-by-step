import { Injectable } from '@angular/core';
import { QuestionApi, Question, LoopBackFilter } from '../../../sdk';


@Injectable()
export class QuestionsService {
  constructor(
    private questionApi: QuestionApi
  ){}

  getQuestions(){
   let filter: LoopBackFilter = {
     "include":{
       "relation": "answers"
     }
   }
   return this.questionApi.find<Question>(filter)
   .toPromise()
  }

  getQuestion(questionId){
    let query = {
      id: questionId
    }
    return this.questionApi.find<Question>({where: query})
    .toPromise()
  }

  getQuestionsByCategory(category_slug){
    let filter: LoopBackFilter = {
      "include":{
        "relation": "answers"
      },
      "where": {
        "categorySlug": category_slug
      }
    }
    return this.questionApi.find<Question>(filter)
    .toPromise()
  }

  getQuestionBySlug(slug){
    let filter: LoopBackFilter = {
      "include":{
        "relation": "answers"
      },
      "where": {
        "questionSlug": slug
      }
    }
    return this.questionApi.findOne<Question>(filter)
    .toPromise()
  }

  deleteQuestion(questionId){
    return this.questionApi.deleteById<Question>(questionId).toPromise()
  }

  updateQuestion(question){
    return this.questionApi.updateAttributes<Question>(question.id, question).toPromise()
  }

  createQuestion(values){
    let data = new Question();
    data.question = values.question;
    data.questionSlug = values.questionSlug;
    data.categorySlug = values.categorySlug;

    return this.questionApi.create<Question>(data).toPromise()
  }

}
