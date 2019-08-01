import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  constructor() { }

  result = '';
  score = 0;

  evaluateResult(feededAnswers, correctAnswers) {
    this.score = 0;
    for (let i = 0; i < feededAnswers.length; i++) {
      if (feededAnswers[i] === correctAnswers[i]) {
        this.score++;
      }
    }
  }

  getResult() {
    return this.score;
  }
}
