import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api-data',
  imports: [],
  templateUrl: './get-api-data.html',
  styleUrl: './get-api-data.css'
})
export class GetApiData {
    //https://json-placeholder.mock.beeceptor.com/roles
    //https://amarsharma-cafse9c4dzgbf2hc.eastus2-01.azurewebsites.net/api/product
    userList:any[]=[];

    pagedUsers: any[] = [];

    pageSize: number = 5;
    currentPage: number = 1;
    totalPages: number = 0;


    constructor(private http:HttpClient) {}
  
    getusers()
    {
        const token = localStorage.getItem('token');

        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`
        });

     this.http.get<any[]>("https://amarsharma-cafse9c4dzgbf2hc.eastus2-01.azurewebsites.net/api/employees", { headers })
      .subscribe({
        next: (res: any[]) => {
          if (Array.isArray(res)) {
            this.userList = res;
            this.currentPage = 1;
            this.updatePagedUsers();
          } else {
            console.error("API did not return an array:", res);
          }
        },
        error: (err) => {
          console.error("API error:", err);
        }
      });

    }
    updatePagedUsers() {
    const totalItems = this.userList?.length ?? 0;
    this.totalPages = Math.ceil(totalItems / this.pageSize);

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.pagedUsers = this.userList.slice(start, end);
    }

    goToPage(page: number) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
      this.updatePagedUsers();
    }
}
