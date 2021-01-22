import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:58629/api"; /*Adres API - Adres po uruchomieniu przez .net*/

  constructor(private http: HttpClient) { }


  /* METODA KONSUMUJĄCA DANE Z API */

  GetUsersAll(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/UsersWithRoles/All");
  }


  /*
   METODA DODAJĄCA DANE DO BAZY 
  addAktualnosci(val: any) {
    return this.http.post(this.APIUrl + '/news', val);
  }
   METODA AKTUALIZUJĄCA DANE DO BAZY 
  putAktualnosci(val: any) {
    return this.http.put(this.APIUrl + '/news', val);
  }
   METODA AKTUALIZUJĄCA DANE DO BAZY (usuwanie po ID aktualnosci)
  deleteAktualnosci(val: any) {
    return this.http.delete(this.APIUrl + '/news/' + val);
  }
  */
}