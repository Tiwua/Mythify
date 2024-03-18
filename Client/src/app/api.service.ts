import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Myth } from './types/myth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getMyths(limit?: number){
    let apiUrl = 'http://localhost:5000/myths/all'

    if(limit){
      apiUrl = `http://localhost:5000/myths/all?limit=${limit}`;
    }

    console.log(apiUrl);
    return this.http.get<Myth[]>(apiUrl);
  }
}
