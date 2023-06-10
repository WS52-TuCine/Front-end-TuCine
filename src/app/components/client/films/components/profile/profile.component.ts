import { Component, Input, OnInit, ViewChild  } from '@angular/core';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Film } from 'src/app/core/models/film.model';
import { MatTableDataSource } from '@angular/material/table';
import { Showtime } from 'src/app/core/models/showtime.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BookTicketComponent } from '../book-ticket/book-ticket.component';
import { Actor } from '../../../../../core/models/actor.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']

})
export class ProfileComponent implements OnInit {
  idPost: any;
  FilmProfile!: Film;
  displayedColumns: string[] = ['cineclub', 'category', 'price', 'date', 'action'];
  data: Showtime[] = [];
  dataSource = new MatTableDataSource(this.data);
  panelOpenState = false;
  ActorList: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

   constructor(
    private _servMoviesProfile: FilmsProfileService,
    private route : ActivatedRoute,
    private sanitizer: DomSanitizer,
    private _dialog: MatDialog,
   ){
    this.idPost = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getMoviebyId(this.idPost);
    this.getShowtimesbyFilmId(this.idPost);
    this.getActorListbyFilmId(this.idPost);
  }

  getMoviebyId(id: number){
    this._servMoviesProfile.getMoviebyId(id).subscribe((res) => {
      this.FilmProfile = res;
      //console.log(this.FilmProfile);
    }, (err) => { console.log(err); }
    );
  }

  getSafeTrailerUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.FilmProfile.trailer);
  } 
  
  //Tabla
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  getShowtimesbyFilmId(id: number){
    this._servMoviesProfile.getShowtimesbyFilmId(id).subscribe((data) => {

      let film: Showtime[] = [];
      data.forEach((element: any) => {
        this._servMoviesProfile.getBusinessById(element.Business_id).subscribe((res) => {
          element.Business = res.name;
          this._servMoviesProfile.getBusinessTypeById(res.BusinessType_id).subscribe((res) => {
            element.BusinessType = res.name;
          }, (err) => { console.log(err); }
          );
          film.push(element);
        }, (err) => { console.log(err); }
        );
      });
      
      //console.log(film);
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      
    }, (err) => { console.log(err); }
    );
  }

  getBusinessById(Business_id: number) {
    return this._servMoviesProfile.getBusinessById(Business_id).subscribe((res) => {
      //console.log(res.name);
      return res.name;
    }, (err) => { console.log(err); }
    );
  }

  getBusinessTypeById(BusinessType_id: number) {
    return this._servMoviesProfile.getBusinessTypeById(BusinessType_id).subscribe((res) => {
      console.log(res.name);
      return res.name;
    }, (err) => { console.log(err); }
    );
  }


// Detalles de la pelicula

  getActorListbyFilmId(Film_id: number) {
    return this._servMoviesProfile.getFilmActorbyFilmId(Film_id).subscribe((res) => {
      
      //console.log(res);
      res.forEach((element: any) => {
        this._servMoviesProfile.getActorByActorId(element.Actor_id).subscribe((res) => {
          element.Actor = res.first_name + " " + res.last_name;
          this.ActorList.push(element);
        }, (err) => { console.log(err); }
        );
      });
      console.log(this.ActorList);
    }, (err) => { console.log(err); }
    );
  }

  getActorByActorId(Actor_id: number) {
    return this._servMoviesProfile.getActorByActorId(Actor_id).subscribe((res) => {
      //console.log(res.name);
      return res.first_name;
    }, (err) => { console.log(err); }
    );
  }

  openBuyTicket(data: any){
    this._dialog.open(BookTicketComponent,{
      data,
    })
  }

}

