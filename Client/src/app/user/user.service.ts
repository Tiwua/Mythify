import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserAuth, UserBasic } from '../types/user';
import { BehaviorSubject, Subscribable, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  user: UserAuth | undefined;
  userRefresh: UserBasic | undefined;
  USER_KEY = '[user]';

  subscription: Subscription;

  get isLogged(): boolean {
    return !!this.user || !!this.userRefresh;
  }

  getUserId(): string | undefined {
    return this.user?.id || this.userRefresh?._id;
  }
  

  private apiUrl: string 
  constructor(private http: HttpClient) { 
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
    this.apiUrl = environment.apiUrl;
  }

  login(email: string, password: string) {
    return this.http.post<UserAuth>(`${this.apiUrl}/users/login`, { email, password })
    .pipe(
      tap((user) => {
        this.user$$.next(user);
    }));
  }

  register(username: string, email: string, password: string, confirmPassword: string) {
    
    return this.http.post<UserAuth>(`${this.apiUrl}/users/register`, { username, email, password, confirmPassword})
    .pipe(
      tap((user) => {
        this.user$$.next(user);
    })); 
  }

  logout() {
    console.log(`${this.apiUrl}/users/logout`);
    
      return this.http.post<UserAuth>(`${this.apiUrl}/users/logout`, {})
        .pipe(
          tap(() => {
            this.user$$.next(undefined);
        }));;
  };

  checkIfUserIsLogged(){
    return this.http.get<UserAuth>(`${this.apiUrl}/users/auth`)
    .pipe(tap((user) => this.user$$.next(user)));;
  }

  getUser() {
      console.log(`${this.apiUrl}/users/info`)
      return this.http.get<UserBasic>(`${this.apiUrl}/users/info`).pipe(tap((user) => this.userRefresh!));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
