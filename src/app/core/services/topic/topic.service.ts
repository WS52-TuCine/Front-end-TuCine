import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private _http: HttpClient) { }

  getAllTopics(): Observable<any>{
    return this._http.get('https://backend-tucine-production.up.railway.app/api/TuCine/v1/topics');
  } 
  
}


