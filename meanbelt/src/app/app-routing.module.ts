import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieNewComponent } from './movies/movie-new/movie-new.component';
import { ReviewsComponent } from './movies/reviews/reviews.component';
import { MovieNewReviewComponent } from './movies/movie-new-review/movie-new-review.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, children: [
    { path: 'new', component: MovieNewComponent},
    { path: ':id', component: ReviewsComponent},
    { path: ':id/review', component: MovieNewReviewComponent},
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: '**', redirectTo: '/movies' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
