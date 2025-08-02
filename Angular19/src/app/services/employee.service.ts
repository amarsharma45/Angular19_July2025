import { Injectable } from '@angular/core';
import { ApiService } from './core/api.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly endpoint='employees'
  constructor(private api:ApiService){}
  getAll():Observable<Employee[]>
  {
    return this.api.get<Employee[]>(this.endpoint)
  }
  getEmployeeById(employeeId:number):Observable<Employee>
  {
    return this.api.getById<Employee>(this.endpoint,employeeId)
  }
  saveEmployee(employee:Employee):Observable<Employee>
  {
      return this.api.post<Employee>(this.endpoint,employee);
  }
  updateEmployee(employeeId:number,employee:Employee):Observable<Employee>
  {
    return this.api.put<Employee>(this.endpoint,employeeId,employee);
  }
  deleteEmployee(employeeId:number):Observable<void>{
    return this.api.delete(this.endpoint,employeeId);
  }
  
}
