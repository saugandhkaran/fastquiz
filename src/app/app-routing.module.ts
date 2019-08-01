import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CategoryComponent } from './components/category/category.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'quiz/:category',
    component: QuizComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
