import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Film } from 'src/app/core/models/film.model';
import { Showtime } from '../../../../../core/models/showtime.model';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent {

  empOfferForm: FormGroup;
  FilmProfile!: Film;
  ShowtimeProfile!: Showtime;

  constructor(
    private _fb: FormBuilder,
    //Para cerrar el modulo
    private _dialogRef: MatDialogRef<BookTicketComponent>,
    private _servMoviesProfile: FilmsProfileService,
    
    //Para recibir la data
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.empOfferForm = this._fb.group({
      id: [this.data.id],
    })
  }

  onFormSubmit(){

  }

  getShowtimeDetails(){
    this._servMoviesProfile.getShowtimebyId(this.data.id).subscribe((res) => {
      this.ShowtimeProfile = res;
      console.log(this.ShowtimeProfile);
    }, (err) => { console.log(err); }
    );
  }
}
