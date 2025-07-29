import { Injectable } from '@angular/core';
import { ApiService } from './core/api.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly endpoint='employee'
  constructor(private api:ApiService){}
  getAll():Observable<Employee[]>
  {
    return this.api.get<Employee[]>(this.endpoint)
  }
  
}
