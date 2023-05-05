import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesProfileServiceService } from 'src/app/services/movies/movies-profile-service.service';
import { Schedule } from '../../../models/movie.model';
import { CineClub } from 'src/app/models/cineclub.model';
import { CineclubService } from 'src/app/services/cineclubs/cineclub.service';


@Component({
  selector: 'cineclubs-movies-available',
  templateUrl: './movies-available.component.html',
  styleUrls: ['./movies-available.component.scss']
})
export class MoviesAvailableComponent implements OnInit {
  @Input() pos = 0;
  cineclub: any;
  dateAvailable: Array<any> = [];

  constructor(
    private _servMoviesProfile: MoviesProfileServiceService,
    private _empServiceCineclub: CineclubService,
    private route : ActivatedRoute,
  ){

  }

  async ngOnInit(): Promise <void> {
    this.route.params.subscribe(params => {
      this.pos = params['id'];       
    });

    await this.getTitleCineclub()
    await this.getMovieAvailableHours()
  }

  async getTitleCineclub(){
    this._empServiceCineclub.getCineclubs().subscribe({
      next:(res) => {
        this.cineclub = res[this.pos-1].title;
        console.log(`1 ${this.cineclub}`)
      }      
    })
  }


  async getMovieAvailableHours (){
    //this.getTitleCineclub();

    this._servMoviesProfile.getMovieListProfile().subscribe({
      next:(res) => {
        //this.dateAvailable = res;
        console.log( `2.${res[this.pos].schedule}`)

        for(let i=0; i< res[this.pos].schedule.length; i++){

          if(res[this.pos].schedule[i].cineclub ===  this.cineclub){
            this.dateAvailable.push(res[this.pos].schedule[i]) 
            console.log(this.dateAvailable)
          }
        }
        //this.dateAvailable[this.pos].schedule[0].cineclub
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
