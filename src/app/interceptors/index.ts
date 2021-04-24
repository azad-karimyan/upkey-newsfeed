import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ApiTokenInterceptor } from './api-token/api-token.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiTokenInterceptor, multi: true }
];
