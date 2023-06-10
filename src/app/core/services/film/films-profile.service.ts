import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Business } from '../../models/cineclub.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsProfileService {

  constructor(private _http: HttpClient) {}

  addMovieProfile(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/Film',data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/Film/${id}`,data);
  }

  getMovieListProfile(): Observable<any>{
    return this._http.get('http://localhost:3000/Film');
  }

  getMoviebyId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/Film/${id}`);
  }

  deleteMovieProfile(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/Film/${id}`)
  }

  //Showtimes
  getShowtimesbyFilmId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/Showtime?Film_id=${id}`);
  }

  getBusinessById(Business_id: number): Observable<any> {
    return this.getBusiness().pipe(
      map((business: any[]) => business.find(business => business.id === Business_id))
    );
  }

  getBusinessTypeById(BusinessType_id: number): Observable<any> {
    return this.getBusinessType().pipe(
      map((businessType: any[]) => businessType.find(businessType => businessType.id === BusinessType_id))
    );
  }

  getActorByActorId(Actor_id: number): Observable<any> {
    return this.getActorList().pipe(
      map((actorList: any[]) => actorList.find(actorList => actorList.id === Actor_id))
    );
  }

  getBusiness(): Observable<any[]>{
    return this._http.get<any[]>('http://localhost:3000/Business');
  }

  getBusinessType(): Observable<any[]>{
    return this._http.get<any[]>('http://localhost:3000/BusinessType');
  }

  getShowtimebyId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/Showtime/${id}`);
  }

  getFilmActorbyFilmId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/FilmActor?Film_id=${id}`);
  }

  getActorList(): Observable<any[]>{
    return this._http.get<any[]>('http://localhost:3000/Actor');
  }

}
