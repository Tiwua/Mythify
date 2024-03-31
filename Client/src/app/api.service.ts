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

  createMyth(title: string, origin: string, timeline: string, description: string, image: string, ownerId: string) {
    return this.http.post<Myth>(`${this.apiUrl}/myths/create`, { title, origin, timeline, description, image, ownerId });
  }

  editMyth(mythId: string, title: string, origin: string, timeline: string, description: string, image: string) {
    return this.http.post<Myth>(`${this.apiUrl}/myths/${mythId}/edit`, { mythId, title, origin, timeline, description, image });
  }

  deleteMyth(mythId: string) {
    return this.http.post<Myth>(`${this.apiUrl}/myths/${mythId}/delete`, { mythId });
  }

  likeMyth(mythId: string, userId: string) {
    return this.http.post<Myth>(`${this.apiUrl}/myths/${mythId}/like`, { mythId, userId, });
  }

  dislikeMyth(mythId: string, userId: string) {
    return this.http.post<Myth>(`${this.apiUrl}/myths/${mythId}/dislike`, { mythId, userId, });
  }

  getLikesCount(mythId: string) {   
    return this.http.get<Myth>(`${this.apiUrl}/myths/${mythId}/likes-count`);
  }
}
