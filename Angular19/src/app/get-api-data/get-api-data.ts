import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api-data',
  imports: [],
  templateUrl: './get-api-data.html',
  styleUrl: './get-api-data.css'
})
export class GetApiData {
    //https://json-placeholder.mock.beeceptor.com/roles
    userList:any[]=[];
    constructor(private http:HttpClient) {}
    getusers()
    {
      this.http.get("https://json-placeholder.mock.beeceptor.com/roles").subscribe((res:any)=>{
        this.userList=res;
      });
    }
}
