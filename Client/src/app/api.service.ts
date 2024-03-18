import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Myth } from './types/myth';
import { environment } from '../environments/environment.development'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }


  getMyths(limit?: number){
    let url = `${this.apiUrl}/myths/all`
    
    if(limit){
      url += `?limit=${limit}`;
    }

    return this.http.get<Myth[]>(url);
  }

  getMyth(mythId: string){
    return this.http.get<Myth>(`${this.apiUrl}/myths/${mythId}/details`);
  }
}
