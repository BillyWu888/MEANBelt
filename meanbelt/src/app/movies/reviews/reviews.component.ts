import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  oneMovie: any;
  allReviewers: Array<String>;
  allStars: Array<Number>;
  allReviews: Array<String>;
  range: Array<Number>;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _movieComponent: MoviesComponent,
  ) { }

  ngOnInit() {
    this._movieComponent.selected = false;
    this.oneMovie = { _id: '', title: '', reviewers: [], stars: [], reviews: []};
    this._route.params.subscribe((params: object) => {
      this._httpService.getOneMovie(params['id']).subscribe(data => {
        this.oneMovie = data['data'];
        this.allReviewers = data['data'].reviewers;
        this.allStars = data['data'].stars;
        this.allReviews = data['data'].reviews;
        this.range = Array(this.allReviewers.length).fill(0).map((x, i) => i);
      });
    });
  }
  deleteMovie() {
    this._httpService.deleteMovie(this.oneMovie._id).subscribe(data => {
      this._httpService.getMovies().subscribe(newData => {
        this._movieComponent.allMovies = newData['data'];
        this._router.navigate(['/movies']);
      });
    });
    // console.log('haro');
  }
  deleteReview(index) {
    this._httpService.updateDeleteReview(this.oneMovie._id, index).subscribe(data => {
      this._httpService.getOneMovie(this.oneMovie._id).subscribe(newData => {
        this.oneMovie = newData['data'];
        this.allReviewers = data['data'].reviewers;
        this.allStars = data['data'].stars;
        this.allReviews = data['data'].reviews;
        this.range = Array(this.allReviewers.length).fill(0).map((x, i) => i);
        this._httpService.getMovies().subscribe(evenNewerData => {
          this._movieComponent.allMovies = evenNewerData['data'];
        });
      });
    });
  }
}
