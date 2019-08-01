import { Injectable } from '@angular/core';
import { QuestionModel } from '../../models/question.model';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  setQuestions(data) {
    const questions = [];
    data.results.forEach(item => {
      let question = {
        question: '',
        options: []
      };
      question.question = item.question;
      question.options = this.setOptionsForQuestions(item.incorrect_answers, item.correct_answer);
      questions.push(question);
    });
    return questions;
  }

  setOptionsForQuestions(incorrectAnswersArray: string[], correctAnswer: string) {
    const tempArray = incorrectAnswersArray;
    tempArray.push(correctAnswer);
    const resultantArray = tempArray
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    return resultantArray;
  }

  setAnswers(data) {
    const answers = [];
    data.results.forEach(item => {
      answers.push(item.correct_answer);
    });
    return answers;
  }
}
