import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router) { }

  categories = [
    {
      label: 'General Knowledge',
      category: '9',
      img: '../../assets/gk.png'
    },
    {
      label: 'Books',
      category: '10',
      img: '../../assets/books.png'
    },
    {
      label: 'Films',
      category: '11',
      img: '../../assets/film.png'
    },
    {
      label: 'Computers',
      category: '18',
      img: '../../assets/computer.png'
    },
    {
      label: 'Mathematics',
      category: '19',
      img: '../../assets/math.png'
    },
    {
      label: 'Vehicles',
      category: '28',
      img: '../../assets/vehicles.png'
    },
    {
      label: 'Gadgets',
      category: '30',
      img: '../../assets/gadget.png'
    },
    {
      label: 'Anime & Manga',
      category: '31',
      img: '../../assets/anime.png'
    },
    {
      label: 'Cartoon & Animations',
      category: '32',
      img: '../../assets/cartoon.png'
    }
  ];

  difficulty = [
    {
      label: 'Easy',
      difficulty: 'easy'
    },
    {
      label: 'Medium',
      difficulty: 'medium'
    },
    {
      label: 'Hard',
      difficulty: 'hard'
    }
  ];
  ngOnInit() {
  }

  moveToQuiz(category) {
    this.router.navigate(['/quiz', category]);
  }
}
