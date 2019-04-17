/* tslint:disable */
import {
  Question
} from '../index';

declare var Object: any;
export interface AnswerInterface {
  "answer": string;
  "negativeVotes"?: number;
  "positiveVotes"?: number;
  "id"?: any;
  "questionId"?: any;
  question?: Question;
}

export class Answer implements AnswerInterface {
  "answer": string;
  "negativeVotes": number;
  "positiveVotes": number;
  "id": any;
  "questionId": any;
  question: Question;
  constructor(data?: AnswerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Answer`.
   */
  public static getModelName() {
    return "Answer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Answer for dynamic purposes.
  **/
  public static factory(data: AnswerInterface): Answer{
    return new Answer(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Answer',
      plural: 'Answers',
      path: 'Answers',
      idName: 'id',
      properties: {
        "answer": {
          name: 'answer',
          type: 'string'
        },
        "negativeVotes": {
          name: 'negativeVotes',
          type: 'number',
          default: 0
        },
        "positiveVotes": {
          name: 'positiveVotes',
          type: 'number',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "questionId": {
          name: 'questionId',
          type: 'any'
        },
      },
      relations: {
        question: {
          name: 'question',
          type: 'Question',
          model: 'Question',
          relationType: 'belongsTo',
                  keyFrom: 'questionId',
          keyTo: 'id'
        },
      }
    }
  }
}
