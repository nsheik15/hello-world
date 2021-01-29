import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  token;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  intercept(req, next) {
    let token = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.token,
      }
    })

    return next.handle(token);
  }


}
