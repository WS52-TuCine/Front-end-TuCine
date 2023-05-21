import { Component, OnInit,ViewChild } from '@angular/core';
import { MovieService } from 'src/app/core/services/movies/movie.service';
import { Movie } from 'src/app/core/models/movie.model';

import { FilterBarComponent } from './components/filter-bar/filter-bar.component';


interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  @ViewChild('filterBar')
  filterBarComponent!: FilterBarComponent;

  currentMovieImage = "https://i.postimg.cc/BQ4pYSnk/image-9.png";
  movies: Movie[] = [];
  moviesCopy: Movie[] = [];
  searchQuery = '';


  selectedFilters:Object[]=[];
  genreFilterInfo:string="default";

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = response;
      this.moviesCopy = response.slice();
    });
  }

  searchMovies(): void {


      this.movies = this.movieService.searchMovies(this.searchQuery, this.moviesCopy);
  }


  applyFilter(event: { value: string, viewValue: string }[]) {

    this.selectedFilters=event;

    this.genreFilterInfo=event[0].value


    if (event.every(item => item.value === 'default')) {
      this.movies = this.moviesCopy.slice();
    } else {
      this.movies=this.filterMoviesByGenre(this.movies)

    }

  }

  filterMoviesByGenre(movies: Movie[]) {
    if (this.genreFilterInfo === 'default') {
      return this.movies = this.moviesCopy.slice();
    } else {
      return this.movies = this.moviesCopy.filter(movie => movie.genres.includes(this.genreFilterInfo));
    }
  }


}
