import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/core/models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public moviesList:Movie[]=[]

  private apiURL="http://localhost:3000/movies"
  constructor(private http:HttpClient) {
    this.getMovies()
  }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL);
  }

  public searchMovies(title: string, movies: Movie[],filters?:string[]): Movie[] {
    if(filters!=undefined){
    }

    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  }

}
