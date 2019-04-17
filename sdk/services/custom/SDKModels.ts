/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Question } from '../../models/Question';
import { Answer } from '../../models/Answer';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Question: Question,
    Answer: Answer,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
