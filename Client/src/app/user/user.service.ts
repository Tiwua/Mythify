import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserAuth } from '../types/user';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<UserAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserAuth | undefined;
  USER_KEY = '[user]';

  private apiUrl: string 
  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  login(email: string, password: string) {
    return this.http.post<UserAuth>(`${this.apiUrl}/users/login`, { email, password });
  }

  register(username: string, email: string, password: string, confirmPassword: string) {
    
    return this.http.post<UserAuth>(`${this.apiUrl}/users/register`, { username, email, password, confirmPassword});
  }
}
