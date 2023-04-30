import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  currentMovieImage="https://i.postimg.cc/BQ4pYSnk/image-9.png"

  constructor() {

  }

  ngOnInit(): void {
  }


}
