// import { Component,Input,OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { MoviesProfileServiceService } from 'src/app/services/movies/movies-profile-service.service';
// import { Schedule } from '../../../models/movie.model';
// import { CineClub } from 'src/app/models/cineclub.model';
// import { CineclubService } from 'src/app/services/cineclubs/cineclub.service';
// import { switchMap ,map,tap} from 'rxjs/operators';

// interface DateAvailable{
//   id:number,
//   day:string,
//   hour: string[],
//   cineclub:string
// }

// @Component({
//   selector: 'cineclubs-movies-available',
//   templateUrl: './movies-available.component.html',
//   styleUrls: ['./movies-available.component.scss']
// })
// export class MoviesAvailableComponent implements OnInit {
//   @Input() pos = 0;
//   cineclub: any;
//   dateAvailable: DateAvailable[] = [];

//   constructor(
//     private _servMoviesProfile: MoviesProfileServiceService,
//     private _empServiceCineclub: CineclubService,
//     private route : ActivatedRoute,
//   ){}

//   ngOnInit(): void {
//     this.route.params.pipe(
//       switchMap(params => {
//         this.pos = params['id'];
//         return this.getTitleCineclub();
//       })
//     ).subscribe(() => {
//       this.getMovieAvailableHours().subscribe(() => {
//         console.log('Date available:', this.dateAvailable);
//       });
//     });
//   }

//   getTitleCineclub() {
//     return this._empServiceCineclub.getCineclubs().pipe(
//       map(res => {
//         this.cineclub = res[this.pos - 1].title;
//         console.log(`1 ${this.cineclub}`);
//       })
//     );
//   }


//   getMovieAvailableHours() {
//     return this._servMoviesProfile.getMovieListProfile().pipe(
//       tap(res => {
//         this.dateAvailable = [];
//         for (let i = 0; i < res[this.pos].schedule.length; i++) {
//           // console.log('iterating schedule', i, res[this.pos].schedule[i].cineclub, this.cineclub);
//           if (res[this.pos].schedule[i].cineclub === this.cineclub) {
//             this.dateAvailable.push(res[this.pos].schedule[i]);
//             console.log(`2 ${this.dateAvailable.values}`);
//           }
//         }

//       })
//     );
//   }

// }

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesProfileServiceService } from 'src/app/services/movies/movies-profile-service.service';
import { Schedule } from '../../../models/movie.model';
import { CineClub } from 'src/app/models/cineclub.model';
import { CineclubService } from 'src/app/services/cineclubs/cineclub.service';
import { switchMap, map, tap } from 'rxjs/operators';

interface DateAvailable {
  id: number;
  day: string;
  hour: string[];
  cineclub: string;
}

@Component({
  selector: 'cineclubs-movies-available',
  templateUrl: './movies-available.component.html',
  styleUrls: ['./movies-available.component.scss']
})
export class MoviesAvailableComponent implements OnInit {
  @Input() pos = 0;
  cineclub: any;
  dateAvailable: string[] = [];

  constructor(
    private _servMoviesProfile: MoviesProfileServiceService,
    private _empServiceCineclub: CineclubService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.pos = params['id'];
        return this.getTitleCineclub();
      })
    ).subscribe(() => {
      this.getMovieAvailableHours().subscribe((dateAvailable: string[]) => {
        console.log('Date available:', dateAvailable);
        this.dateAvailable = dateAvailable;
      });
    });
  }

  getTitleCineclub() {
    return this._empServiceCineclub.getCineclubs().pipe(
      map(res => {
        this.cineclub = res[this.pos - 1].title;
        console.log(`1 ${this.cineclub}`);
      })
    );
  }

  getMovieAvailableHours() {
    return this._servMoviesProfile.getMovieListProfile().pipe(
      map(res => {
        const dateAvailable: string[] = [];
        for (let i = 0; i < res[this.pos].schedule.length; i++) {
          if (res[this.pos].schedule[i].cineclub === this.cineclub) {
            dateAvailable.push(...res[this.pos].schedule[i].hour);
          }
        }
        console.log(`2 ${dateAvailable}`);
        return dateAvailable;
      })
    );
  }

}
