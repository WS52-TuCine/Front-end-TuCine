import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CineClub } from 'src/app/core/models/cineclub.model';

@Injectable({
  providedIn: 'root'
})
export class CineclubService {

  public moviesList:CineClub[]=[]
  private apiURL="http://localhost:3000/cineclubs"

  constructor(private http: HttpClient) {
    this.getCineclubs()
   }

  public getCineclubs(): Observable<CineClub[]> {
    return this.http.get<CineClub[]>(this.apiURL);
  }

  public searchCineclubs(title: string, cineclubs: CineClub[]): CineClub[] {

    return cineclubs.filter(cineclub => cineclub.title.toLowerCase().includes(title.toLowerCase()));
  }
  public get(url:string){
    return this.http.get(url); //Get host

  }

}



