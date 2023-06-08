import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinephileProfileService {

  constructor(private _http: HttpClient) {}

  //General
  addPerson(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/Person',data);
  }

  getPersonList(): Observable<any>{
    return this._http.get('http://localhost:3000/Person');
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

  addOwner(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/Owner',data);
  }

  addBusiness(data: any):Observable<any>{
    return this._http.post('http://localhost:3000/Business',data);
  }

  validateCredentials(email: string, password: string): Observable<any>{
    return this.getPersonList().pipe(
      switchMap((userList: any[]) => {
        const user = userList.find(user => user.email === email);
  
        if (user && user.password === password) {
          // Las credenciales coinciden
          return of({ valid: true, user: user });
        } else {
          // Las credenciales no coinciden
          return of({ valid: false, user: null });
        }
      })
    );
  }

}
