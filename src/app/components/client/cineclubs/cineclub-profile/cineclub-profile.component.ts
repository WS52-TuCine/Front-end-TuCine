import { Component, OnInit } from '@angular/core';
import { CineclubDetailsComponent } from '../cineclub-details/cineclub-details.component';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { MoviesProfileServiceService } from 'src/app/core/services/movies/movies-profile-service.service';

@Component({
  selector: 'cineclub-cineclub-profile',
  templateUrl: './cineclub-profile.component.html',
  styleUrls: ['./cineclub-profile.component.scss']
})
export class CineclubProfileComponent  {
  constructor(private _empServiceMovie: MoviesProfileServiceService ,
    private _empServiceCineclub: CineclubService,
  ){}


}
