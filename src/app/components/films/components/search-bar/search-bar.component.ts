import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilmsComponent } from '../../films.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @ViewChild("searchMovieInput")
  public movieInput!:ElementRef<HTMLInputElement>;

  constructor(private filmsComponent: FilmsComponent){

  }

  searchMovies() {
    // aquí se pueden realizar las operaciones de búsqueda con la cadena de consulta `query`
    // console.log(`Buscando películas con la cadena de consulta: ${this.movieInput.nativeElement.value}`);
    const searchQuery = this.movieInput.nativeElement.value;
    this.filmsComponent.searchQuery=searchQuery;
    this.filmsComponent.searchMovies();

  }

}