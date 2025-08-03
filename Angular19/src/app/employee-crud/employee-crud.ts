import { Component,OnInit, ViewChild,Output,EventEmitter,AfterViewInit,ElementRef} from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';
import { EmployeeModelEdit } from '../shared/employee/employee-model-edit/employee-model-edit';

import { Observable } from 'rxjs';

@Component({
  imports:[   
  CommonModule,
  EmployeeModelEdit
  ],
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud implements  OnInit  {
    @ViewChild('draggableModal', { static: false }) modalDialog!: ElementRef;
 isEditMode:boolean=false;
  listEmp:Employee[]=[];
  // employee:Employee ;
  employee: Employee = this.createEmptyEmployee();
   username: string = '';
  //model
  showModal = false;
  openCreateModal() {
  this.employee = {
    employeeID: 0, firstName: '', lastName: '', email: '',
    department: '', joiningDate: '', salary: 0
  };
  this.showModal = false;

}
    // Pagination
  paginatedEmployees: Employee[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;
  totalPagesArray: number[] = [];

  constructor(private emp:EmployeeService){}
  ngOnInit(): void {
    this.getAllEmployees();
     const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      //this.username = payload.username; // make sure backend includes "username" in token
      this.username = payload.unique_name || '';
      console.log(this.username)
    }
    
  }
    getAllEmployees()
    {
        this.emp.getAll().subscribe({
          next:(data)=>{
           this.listEmp= data.map(emp => ({
                          ...emp,
                          joiningDate: emp.joiningDate?.split('T')[0] // Keep only the date part
                        })).sort((a, b) => b.employeeID - a.employeeID);
            console.log(data);
            this.setupPagination();
          }
        });
    }
    onEdit(empId: number): void {
      this.emp.getEmployeeById(empId).subscribe({
        next:(data:Employee)=>{
          this.employee = { ...data };    
                if (this.employee.joiningDate) {
                  this.employee.joiningDate = this.employee.joiningDate.split('T')[0]; // Keep only YYYY-MM-DD
                }
           console.log('Edit clicked:', data);
           this.showModal = true;
           this.isEditMode=true;
        }
      });

  // You can open a dialog here
  }
  create()
  {
    this.employee =this.createEmptyEmployee();
    this.isEditMode=false;
    this.showModal = true;
    
  }
  onSave(employee:Employee)
  {
    if(employee.employeeID==0)
    {
      this.createEmp(employee);
    }
    else{
      this.updateEmployee(employee);
    }
    this.employee =this.createEmptyEmployee();
  
    this.isEditMode=false;
    this.showModal = false;
     
  }
  createEmp(employee: Employee) 
  {
    // console.log('Saving employee:', employee); // 
    this.emp.saveEmployee(employee).subscribe({
      next: res => {
        debugger;
        this.getAllEmployees();
        console.log('Saved successfully');
      }
    });
  }
  updateEmployee(employee:Employee)
  {
    this.emp.updateEmployee(employee.employeeID,employee).subscribe({
      next:res=>{
        this.getAllEmployees();
        console.log("Update record successfully");
      }
    });
  }
  onDelete(emp: number): void {
  console.log('Delete clicked:', emp);
  // Call API to delete
  }
  closeModal(): void {
    this.showModal = false;
    this.isEditMode = false;
   
  }


  setupPagination(): void {
    this.totalPages = Math.ceil(this.listEmp.length / this.pageSize);
    this.totalPagesArray = Array(this.totalPages).fill(0).map((_, i) => i + 1);
    this.paginate();
  }

  paginate(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedEmployees = this.listEmp.slice(start, end);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.paginate();
  }

  //black pobject

  private createEmptyEmployee(): Employee 
  {
    return {
      employeeID: 0,
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      joiningDate: '',
      salary: 0
    };
  
  }
 
}
