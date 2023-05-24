import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL="http://localhost:3000/Category";

  constructor(private http:HttpClient) {}

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL);
  }
}
