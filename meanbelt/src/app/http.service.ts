import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient,
  ) { }
  getMovies() {
    // console.log('http.service getting all');
    return this._http.get('/api/movies');
  }
  getOneMovie(movid_id) {
    // console.log('http.service getting one', movid_id);
    return this._http.get(`/api/movies/${movid_id}`, movid_id);
  }
  addMovie(movie) {
    // console.log('http.service adding a movie', movie);
    return this._http.post('/api/movies', movie);
  }
  updateMovie(id, movie) {
    // console.log('http.service updating movie', movie);
    return this._http.put(`/api/movies/${id}`, movie);
  }
  updateDeleteReview(id, index) {
    // console.log('http.service updating movie', movie);
    return this._http.put(`/api/movies/editreview/${id}`, {index: index});
  }
  deleteMovie(movid_id) {
    // console.log('http.service delete', movid_id);
    return this._http.delete(`/api/movies/${movid_id}`, movid_id);
  }
}
