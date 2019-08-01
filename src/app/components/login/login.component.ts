import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  nameAvailable = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getName();
  }

  getName() {
    if (localStorage.getItem('fastquiz-name')) {
      this.name = localStorage.getItem('fastquiz-name');
      this.nameAvailable = true;
    } else {
      this.nameAvailable = false;
    }
  }

  onSubmit() {
    localStorage.setItem('fastquiz-name', this.name);
    this.router.navigateByUrl('/category');
  }

}
