import { Component,OnInit, ViewChild} from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

import { MatTableDataSource ,MatTableModule} from '@angular/material/table';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports:[   
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud implements  OnInit  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  listEmp:Employee[]=[]
  displayedColumns: string[] = ['employeeID', 'firstName','lastName','email','actions'];
  dataSource = new MatTableDataSource<Employee>();
  constructor(private emp:EmployeeService){}

  ngOnInit(): void {
    this.getAllEmployees();
  }

    getAllEmployees()
    {
        this.emp.getAll().subscribe({
          next:(data)=>{
            this.dataSource.data=data;
            console.log(data);
          }
        });
    }
    onEdit(emp: Employee): void {
  console.log('Edit clicked:', emp);
  // You can open a dialog here
}

onDelete(emp: Employee): void {
  console.log('Delete clicked:', emp);
  // Call API to delete
}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
