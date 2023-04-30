import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchMovies(query: string) {
    // aquí se pueden realizar las operaciones de búsqueda con la cadena de consulta `query`
    console.log(`Buscando películas con la cadena de consulta: ${query}`);
  }

}
