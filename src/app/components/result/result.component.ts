import { Component, OnInit } from '@angular/core';
import { ResultServiceService } from '../../services/result-service/result-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    private resultService: ResultServiceService
  ) { }

  message = '';
  stars = 0;
  score = 0;
  successStars = [];
  emptyStars = [];
  name = '';

  ngOnInit() {
    this.getTheResult();
    this.getName();
  }

  getName() {
    this.name = localStorage.getItem('fastquiz-name');
  }

  getTheResult() {
    this.score = this.resultService.getResult();
    this.setStars(this.score);
  }

  setStars(score) {
    this.stars = Math.round(score / 2);
    this.successStars = Array(this.stars).fill(0);
    this.emptyStars = Array(5 - this.stars).fill(0);
    this.setMessage(this.stars);
  }

  setMessage(stars) {
    switch (stars) {
      case 0:
        this.message = 'Why don\'t we start over again ?';
        break;
      case 1:
        this.message = 'You can do a lot better. Why not try again?';
        break;
      case 2:
        this.message = 'Practice makes a man/woman perfect';
        break;
      case 3:
        this.message = 'Average! But you have a lot more potential!!';
        break;
      case 4:
        this.message = 'One more step to the moon!! Well done!!';
        break;
      case 5:
        this.message = 'Excellent! You are a genius!!';
        break;
    }
  }
}
