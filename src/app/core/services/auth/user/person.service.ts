import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/core/models/person.model';
import { Group } from 'src/app/core/models/group.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public personsList:Person[]=[]
  private apiURL="https://backend-tucine-production.up.railway.app/api/TuCine/v1/persons"
  constructor(private http: HttpClient) {
    this.getPersons()
   }
   public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiURL);
  }

  public getPersonById(id: any): Observable<Person> {
    return this.http.get<Person>(`${this.apiURL}/${id}`);
  }

  public getAllGroupsByPersonId(id: any): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiURL}/${id}/groups`);
  }
  
  public get(url:string){
    return this.http.get(url); //Get host

  }
}




