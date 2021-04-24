import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {

  token = '82defcf324571e70b0521d79cce2bf3fffccd69';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({headers: request.headers.set('Access-Token', this.token)});
    return next.handle(request);
  }
}
