import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/core/models/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public personsList:Person[]=[]
  private apiURL="http://localhost:3000/Person"
  constructor(private http: HttpClient) {
    this.getPersons()
   }
   public getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiURL);
  }
  public searchPersons(title: string, persons: Person[]): Person[] {

    return persons.filter(person => person.name.toLowerCase().includes(title.toLowerCase()));
  }
  public get(url:string){
    return this.http.get(url); //Get host

  }
}




