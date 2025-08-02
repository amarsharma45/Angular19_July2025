import { HttpInterceptorFn,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http'
import{ Injectable} from '@angular/core';
import { HttpInterceptor, } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
const token = localStorage.getItem("token");
console.log('from interceptor: '+token);
if(token){
  req=req.clone({

    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })
}
  return next(req);
};
