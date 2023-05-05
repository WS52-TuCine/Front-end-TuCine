import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { ImplicitReceiver } from '@angular/compiler';
import { ProfileComponent } from '../profile/profile.component';
import { MoviesProfileServiceService } from 'src/app/services/movies/movies-profile-service.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-profilecrud',
  templateUrl: './profilecrud.component.html',
  styleUrls: ['./profilecrud.component.scss']
})

export class ProfilecrudComponent implements OnInit {
  displayedColumns: string[] = ['select', 'cineclub', ' categoria', 'horario'];
  dataSource = new MatTableDataSource<any>;
  selection = new SelectionModel <any>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private http: HttpClient,private _dialog: MatDialog,
    private _servisMoviesProfile: MoviesProfileServiceService,
    ) {}

  ngOnInit() {
    this.getMovieList();
  }

  openAddMovieForm(){
    const dialogRef = this._dialog.open(ProfileComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getMovieList();
        }
      }
    })
  }

  getMovieList(){
    this._servisMoviesProfile.getMovieList().subscribe({
      next: (res) => {
        //console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  } 

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  
  openEditForm(data:any){
    const dialogRef = this._dialog.open(ProfileComponent,{
      data: data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getMovieList();
        }
      }
    })
  }

}
