import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   //  private readonly baseUrl = 'https://localhost:7263/api';
      private readonly baseUrl = 'https://amarsharma-cafse9c4dzgbf2hc.eastus2-01.azurewebsites.net/api';
    
   constructor(private http:HttpClient  ){ }

  



   get<T>(endpoint:string,params?:HttpParams):Observable<T>{
         const token = localStorage.getItem('token');
         const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });
          return this.http.get<T>(`${this.baseUrl}/${endpoint}`,{headers,params});
   }
   getById<T>(endpoint:string,id:Number):Observable<T>{
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
   }

   post<T>(endpoint:string,payload:any):Observable<T>{
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`,payload);
   }

   put<T>(endpoint:string,id:number,payload:any):Observable<T>
   {
      return this.http.put<T>(`${this.baseUrl}/${endpoint}/${id}`,payload);
   }
   delete(endpoint:string,id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${endpoint}/${id}`);
   }
}
