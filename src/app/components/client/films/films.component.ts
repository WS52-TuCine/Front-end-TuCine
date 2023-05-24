import { Component, OnInit,ViewChild } from '@angular/core';
import { FilmService } from 'src/app/core/services/film/film.service';
import { Film } from 'src/app/core/models/film.model';

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
  Films: Film[] = [];
  FilmsCopy: Film[] = [];
  searchQuery = '';


  selectedFilters:Object[]=[];
  genreFilterInfo:string="default";

  constructor(private movieService: FilmService) {}

  ngOnInit(): void {
    this.movieService.getFilms().subscribe((response) => {
      this.Films = response;
      this.FilmsCopy = response.slice();

      console.log(this.Films);
    });
  }

  searchMovies(): void {
      this.Films = this.movieService.searchFilms(this.searchQuery, this.FilmsCopy);
  }


  applyFilter(event: { value: string, viewValue: string }[]) {

    this.selectedFilters=event;

    this.genreFilterInfo=event[0].value

    if (event.every(item => item.value === 'default')) {
      this.Films = this.FilmsCopy.slice();
    } else {
      // this.Films=this.filterMoviesByGenre(this.Films)

    }

  }

  filterMoviesByGenre(films: Film[]) {
    if (this.genreFilterInfo === 'default') {
      return this.Films = this.FilmsCopy.slice();
    } else {
      return ;
      // return this.Films = this.FilmsCopy.filter(film => film.genres.includes(this.genreFilterInfo));
    }
  }


}
