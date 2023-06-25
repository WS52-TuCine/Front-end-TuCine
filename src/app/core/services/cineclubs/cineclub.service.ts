import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from 'src/app/core/models/cineclub.model';

@Injectable({
  providedIn: 'root'
})
export class CineclubService {

  public moviesList:Business[]=[]
  private apiURL="http://localhost:3000/Business"
  private apiBackend="https://backend-tucine-production.up.railway.app/api/TuCine/v1/businesses";
  constructor(private http: HttpClient) {
    this.getCineclubs()
   }

  public getCineclubs(): Observable<Business[]> {
    return this.http.get<Business[]>(this.apiBackend);
  }

  public searchCineclubs(title: string, cineclubs: Business[]): Business[] {

    return cineclubs.filter(cineclub => cineclub.name.toLowerCase().includes(title.toLowerCase()));
  }
  public get(url:string){
    return this.http.get(url); //Get host

  }

}
