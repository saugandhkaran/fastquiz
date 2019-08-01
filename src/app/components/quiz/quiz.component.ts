import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../services/utilities/utilities.service';
import { QuestionServiceService } from '../../services/question-service/question-service.service';
import { ResultServiceService } from '../../services/result-service/result-service.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(
    private utility: UtilitiesService,
    private questionService: QuestionServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private resultService: ResultServiceService
  ) { }

  areQuestionsLoaded = false;
  counter = 0;
  questions = [];
  feededAnswers = [];
  category = '';
  answers = [];
  timer;
  showTimer = false;
  ngOnInit() {
    this.getTheCategory();
    this.getSetOfQuestions();
  }

  getTheCategory() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });
  }

  getSetOfQuestions() {
    this.questionService.getSetOfQuestions(this.category, 'medium')
    .subscribe((data) => {
      this.questions = this.utility.setQuestions(data);
      this.answers = this.utility.setAnswers(data);
      this.areQuestionsLoaded = true;
      this.showTimer = true;
      console.log(this.questions);
       }, (error) => {
           console.log(error);
       });
  }

  nextQuestion(answer) {
    if (this.counter < 9) {
      this.feededAnswers.push(answer);
      this.counter++;
    } else {
      this.feededAnswers.push(answer);
      this.showResults(this.feededAnswers);
    }
  }

  showResults(feededAnswers) {
    const fedAnswers = [...this.feededAnswers];
    const actualAnswers = [...this.answers];
    this.resultService.evaluateResult(fedAnswers, actualAnswers);
    this.router.navigateByUrl('/result');
  }
}
