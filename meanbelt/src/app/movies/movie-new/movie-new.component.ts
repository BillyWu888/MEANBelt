import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies.component';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
  newMovie: any;
  newError: Array<String>;
  newMovieForm: FormGroup;
  // newMovieForm = new FormGroup({
  //   title: new FormControl(''),
  //   reviewer: new FormControl(''),
  //   review: new FormControl(''),
  // });
  constructor(
    private _movieComponent: MoviesComponent,
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newError = [];
    this.newMovie = { title: '', reviewer: '', stars: 1, review: ''};
    this._movieComponent.selected = false;
  }
  addNewMovie() {
    this.newError = [];
    // console.log(this.newMovie);
    this._httpService.addMovie(this.newMovie).subscribe((data: any) => {
      if (data.errors) {
        // tslint:disable-next-line:forin
        for ( const err in data.errors) {
          this.newError.push(data.errors[err].message);
        }
        console.log('Line 35', this.newError);
      } else {
        this._httpService.getMovies().subscribe(newData => {
          this._movieComponent.allMovies = newData['data'];
          this._router.navigate(['/movies']);
        });
      }
    });
  }
}
