import { Component, Input, OnInit } from '@angular/core';
import { CineclubService } from 'src/app/services/cineclubs/cineclub.service';
import { MoviesProfileServiceService } from 'src/app/services/movies/movies-profile-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cineclubs-cineclub-details',
  templateUrl: './cineclub-details.component.html',
  styleUrls: ['./cineclub-details.component.scss']
})
export class CineclubDetailsComponent implements OnInit {
  @Input() pos = 0;
  cineclubProfile: Array<any> = [];
  
  constructor(private _empServiceMovie: MoviesProfileServiceService , 
    private _empServiceCineclub: CineclubService,
    private route : ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pos = params['id']; // peliculas/3
    });
    this.getCineclub();
  }

  getCineclub(){
    this._empServiceCineclub.getCineclubs().subscribe({
      next: (res) => {
         console.log(res)
         this.cineclubProfile = res;
      },
      error: (err) => {
        console.log(err)
      }   
    })
  } 
}
