import { Injectable } from '@angular/core';
import { UtilitiesService } from '../utilities/utilities.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor(private http: HttpClient, private utilitiesSerice: UtilitiesService) { }

  getSetOfQuestions(category, difficulty) {
    const parameters = {
      'difficulty': difficulty,
      amount: '10',
      'category': category
    };
    return this.http.get('https://opentdb.com/api.php', { params: parameters });
  }
}
