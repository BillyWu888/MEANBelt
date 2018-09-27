import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieNewComponent } from './movies/movie-new/movie-new.component';
import { MovieNewReviewComponent } from './movies/movie-new-review/movie-new-review.component';
import { ReviewsComponent } from './movies/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieNewComponent,
    MovieNewReviewComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
