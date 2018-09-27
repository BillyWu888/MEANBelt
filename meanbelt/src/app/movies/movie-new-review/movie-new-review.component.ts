import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies.component';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-new-review',
  templateUrl: './movie-new-review.component.html',
  styleUrls: ['./movie-new-review.component.css']
})
export class MovieNewReviewComponent implements OnInit {
  oneMovie: any;
  updateMovie: any;
  editError: Array<String>;
  constructor(
    private _movieComponent: MoviesComponent,
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.editError = [];
    this._movieComponent.selected = false;
    this.oneMovie = { _id: '', title: '', reviewers: [], stars: [], reviews: []};
    this.updateMovie = { reviewer: '', avgStars: 0, stars: 0, review: ''};
    this._route.params.subscribe((params: object) => {
      this._httpService.getOneMovie(params['id']).subscribe(data => {
        this.oneMovie = data['data'];
      });
    });
  }
  addReview() {
    this.editError = [];
    this._httpService.updateMovie(this.oneMovie._id, this.updateMovie).subscribe(data => {
      this._httpService.getOneMovie(this.oneMovie._id).subscribe(newData => {
        this.oneMovie = newData['data'];
        this._httpService.getMovies().subscribe(evenNewerData => {
          this._movieComponent.allMovies = evenNewerData['data'];
          this._router.navigate(['/movies', this.oneMovie._id]);
        });
        // this._movieComponent.allMovies = newData['data'];
      });
    });
    // console.log(this.updateMovie);
  }
}
// this._httpService.getMovies().subscribe(newData => {
//   this._movieComponent.allMovies = newData['data'];
//   this._router.navigate(['/movies']);
// });
