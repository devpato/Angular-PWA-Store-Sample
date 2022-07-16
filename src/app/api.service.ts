import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL= "https://store-api-a7c49-default-rtdb.firebaseio.com/shoes.json";
  constructor(private http: HttpClient) { }

  getShoes(): Observable<any[]>{
    return this.http.get<any[]>(this.apiURL);
  }
}
