import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
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
    private _servMoviesProfile: FilmsProfileService,
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
        this.cineclub = res[this.pos - 1].name;
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
