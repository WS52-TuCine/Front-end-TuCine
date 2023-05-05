import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

interface Genre {
  value: string;
  viewValue: string;
}

interface Order {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent{


  constructor(private movieService:MovieService){}

  genres: Genre[] = [
    { value: 'default', viewValue: 'Todos' },
    {value: 'comedy', viewValue: 'Comedia'},
    {value: 'romance', viewValue: 'Romance'},
    {value: 'action', viewValue: 'Acción'},
    {value: 'drama', viewValue: 'Drama'},
    {value: 'thriller', viewValue: 'Thriller'},
    {value: 'music', viewValue: 'Musica'},
    {value: 'adventure', viewValue: 'Aventura'}
  ];

  order: Order[]=[
    { value: 'default', viewValue: 'No ordenar' },
    { value: 'title', viewValue: 'Titulo' },
  ]

  selectedGenre: Genre={value:'default',viewValue:'Todos'};
  selectedOrder: Order={value:'default',viewValue:'No ordenar'}

  totalFilters=[this.selectedGenre,this.selectedOrder]

  @Output() emiteFiltros= new EventEmitter<{ value: string, viewValue: string }[]>();

  enviarFiltros(){
    this.totalFilters=[this.selectedGenre,this.selectedOrder]
    this.emiteFiltros.emit(this.totalFilters)
  }



}
