import { Component, Input, OnInit  } from '@angular/core';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']

})
export class ProfileComponent implements OnInit {
  @Input() pos = 0;
   moviesProfile: Array<any> = [];

   constructor(
    private _servMoviesProfile: FilmsProfileService,
    private route : ActivatedRoute,
    public sanitizer: DomSanitizer
   ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pos = params['id']; // peliculas/3
      console.log(this.pos)
    });
    this.getMovieProfileList()

  }

   getMovieProfileList(){
      this._servMoviesProfile.getMovieListProfile().subscribe({
        next:(res) => {
          this.moviesProfile = res;
        },
        error: (err) => {
          console.log(err)
        }
      })
   }
}

