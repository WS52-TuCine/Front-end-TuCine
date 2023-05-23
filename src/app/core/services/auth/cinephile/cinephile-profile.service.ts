import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  constructor(private _http: HttpClient) {}

  addCinephile(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/cinephile',data);
  }

  updateCinephile(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/cinephile${id}`,data);
  }

  getCinephileList(): Observable<any>{
    return this._http.get('http://localhost:3000/cinephile');
  }
}
