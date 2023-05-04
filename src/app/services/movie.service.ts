import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public moviesList:Movie[]=[]

  private apiURL="http://localhost:3000/movies"
  constructor(private http:HttpClient) {
    this.getData()
  }

  public getData(){
    this.http.get<Movie[]>(this.apiURL).subscribe((response)=>{
        this.moviesList=response;
        console.log(this.moviesList)
    })
  }

  public searchMovies(title:string):Movie[] {
    return this.moviesList.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  }
}
