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
      this.http.get("https://amarsharma-cafse9c4dzgbf2hc.eastus2-01.azurewebsites.net/api/product").subscribe((res:any)=>{
        this.userList=res;
      });
    }
}
