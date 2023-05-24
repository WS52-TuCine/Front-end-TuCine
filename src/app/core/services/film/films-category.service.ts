import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Movie } from 'src/app/core/models/film.model';
import { FilmCategory } from '../../models/film.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmsCategoryService {

  public FilmCategoryList:FilmCategory[]=[]

  private apiURL="http://localhost:3000/FilmCategory";

  constructor(private http:HttpClient) {}

  //A traves del ID de la pelicula devolver todas las categorias a las que pertenece
  public getFilmCategory(idFilm: number): Observable<FilmCategory[]> {
    return this.http.get<FilmCategory[]>(this.apiURL);
  }
}
