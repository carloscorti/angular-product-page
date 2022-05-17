import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        let errorMsg: string = '';
        if (errorResponse.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMsg = `HttpErrorInterceptor - An error occurred: ${errorResponse.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMsg = `HttpErrorInterceptor - Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
        }

        console.warn(errorMsg);
        throw errorMsg;
      })
    );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true,
};
