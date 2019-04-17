/* tslint:disable */
import {
  Answer
} from '../index';

declare var Object: any;
export interface QuestionInterface {
  "categorySlug"?: string;
  "questionSlug": string;
  "question": string;
  "negativeVotes"?: number;
  "positiveVotes"?: number;
  "id"?: any;
  answers?: Answer[];
}

export class Question implements QuestionInterface {
  "categorySlug": string;
  "questionSlug": string;
  "question": string;
  "negativeVotes": number;
  "positiveVotes": number;
  "id": any;
  answers: Answer[];
  constructor(data?: QuestionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Question`.
   */
  public static getModelName() {
    return "Question";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Question for dynamic purposes.
  **/
  public static factory(data: QuestionInterface): Question{
    return new Question(data);
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
      name: 'Question',
      plural: 'Questions',
      path: 'Questions',
      idName: 'id',
      properties: {
        "categorySlug": {
          name: 'categorySlug',
          type: 'string'
        },
        "questionSlug": {
          name: 'questionSlug',
          type: 'string'
        },
        "question": {
          name: 'question',
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
      },
      relations: {
        answers: {
          name: 'answers',
          type: 'Answer[]',
          model: 'Answer',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'questionId'
        },
      }
    }
  }
}
