import { Component, OnInit } from '@angular/core';0
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit{

  currentMovieImage = "https://i.postimg.cc/BQ4pYSnk/image-9.png";
  movies: Movie[] = [];
  moviesCopy: Movie[] = [];
  searchQuery = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = response;
      this.moviesCopy = response.slice();
    });
  }

  searchMovies(): void {
    console.log(this.searchQuery)
    this.movies = this.movieService.searchMovies(this.searchQuery, this.moviesCopy);
    console.log(this.movies)
  }




}
