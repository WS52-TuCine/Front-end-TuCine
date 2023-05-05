import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MoviesProfileServiceService } from 'src/app/services/movies/movies-profile-service.service';


@Component({
  selector: 'app-profilecrud',
  templateUrl: './profilecrud.component.html',
  styleUrls: ['./profilecrud.component.scss']
})
export class ProfilecrudComponent {
  constructor(
    private _servMoviesProfile: MoviesProfileServiceService,
   ){},
  isplayedColumns: string[] = ['select', 'cineclub', ' categoria', 'horario'];
  dataSource = new MatTableDataSource <any>;
  selection = new SelectionModel <any>;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {

  }

}
