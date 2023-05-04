import { Component, OnInit } from '@angular/core';0
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  currentMovieImage="https://i.postimg.cc/BQ4pYSnk/image-9.png"

  constructor(private movieService:MovieService) {
  }

  get movies():Movie[]{
    // console.log(this.movieService.moviesList)
    return this.movieService.moviesList;
  }


}
