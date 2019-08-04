import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path : 'Books', component : BooksComponent},
  {path : 'Technologies', component: TechnologiesComponent},
  {path : '', component : TechnologiesComponent},
  {path : '**', component : InvalidComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
