import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpheadersInterceptor implements HttpInterceptor{
    constructor() {}

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            req = req.clone({
                setHeaders: { },
                setParams: {
                    key: '45355a9768f34168ad5fec5817908b23',
                }
                });
            return next.handle(req);
        }
    
}