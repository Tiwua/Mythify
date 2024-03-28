import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ErrorService } from './error/error.service';

const { apiUrl } = environment

@Injectable()
class AppInterceptor implements HttpInterceptor {

  constructor(private router: Router, private errorService: ErrorService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.startsWith(apiUrl)) {
      request = request.clone({ withCredentials: true });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        console.log(error.status)
        if(error.status === 401) {
          this.router.navigate(['/users/login'])
        } else {
          this.errorService.setError(error);
          this.router.navigate(['/error'])
        }

        return [error];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};