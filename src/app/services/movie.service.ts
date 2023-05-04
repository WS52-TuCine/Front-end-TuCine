import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public moviesList:Movie[]=[]

  private apiURL="http://localhost:3000/movies"
  constructor(private http:HttpClient) {
    // this.getData()
    this.getMovies()
  }


  // public getData(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.apiURL);
  // }

  // public getData(){
  //   this.http.get<Movie[]>(this.apiURL).subscribe((response)=>{
  //       this.moviesList=response;
  //       // console.log(this.moviesList)
  //   })
  // }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL);
  }

  public searchMovies(title: string, movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  }

  // public searchMovies(title:string):Movie[] {
  //   return this.moviesList.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  // }
}
