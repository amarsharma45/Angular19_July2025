import { Component,OnInit} from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud implements  OnInit  {

    listEmp:Employee[]=[]

    constructor(private emp:EmployeeService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }

    getAllEmployees()
    {
        this.emp.getAll().subscribe({
          next:(data)=>{
            this.listEmp=data;
            console.log(data);
          }
        });
    }
}
