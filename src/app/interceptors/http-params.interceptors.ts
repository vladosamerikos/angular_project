import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  
  @Injectable()
  export class HttpParamsInterceptor implements HttpInterceptor {
    constructor() {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const newReq = req.clone({
        setParams: {
          key: '45355a9768f34168ad5fec5817908b23',
        },
      });
      return next.handle(newReq);
    }
  }