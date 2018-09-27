import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selected: Boolean;
  allMovies: Array<Object>;
  constructor(
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.selected = true;
    this._httpService.getMovies().subscribe(data => {
      this.allMovies = data['data'];
      console.log(this.allMovies);
    });
  }
  childSwitch() {
    this.selected = !this.selected;
  }
}
