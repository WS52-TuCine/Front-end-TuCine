import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/Person',data);
  }
  getUserGender(): Observable<any>{
    return this._http.get('http://localhost:3000/Gender');
  }

  //Customer
  addCustomer(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/Customer',data);
  }

  getCustomerList(): Observable<any>{
    return this._http.get('http://localhost:3000/Customer');
  }

  //Owner
  getBusinessTypeList(): Observable<any>{
    return this._http.get('http://localhost:3000/BusinessType');
  }

}
