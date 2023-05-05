import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-weekly-film',
  templateUrl: './weekly-film.component.html',
  styleUrls: ['./weekly-film.component.scss']
})
export class WeeklyFilmComponent{


  @Input()
  public movies:Movie[]=[];

  constructor(){}


}
