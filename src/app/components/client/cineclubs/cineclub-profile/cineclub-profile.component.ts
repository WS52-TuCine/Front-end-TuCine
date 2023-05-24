import { Component, OnInit } from '@angular/core';
import { CineclubDetailsComponent } from '../cineclub-details/cineclub-details.component';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';

@Component({
  selector: 'cineclub-cineclub-profile',
  templateUrl: './cineclub-profile.component.html',
  styleUrls: ['./cineclub-profile.component.scss']
})
export class CineclubProfileComponent  {
  constructor(private _empServiceMovie: FilmsProfileService ,
    private _empServiceCineclub: CineclubService,
  ){}


}
