import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesProfileServiceService {

  constructor(private _http: HttpClient) {}

  addMovieProfile(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/movies',data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/movies/${id}`,data);
  }

  getMovieListProfile(): Observable<any>{
    return this._http.get('http://localhost:3000/movies');
  }

  deleteMovieProfile(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/movies/${id}`)
  }
}
