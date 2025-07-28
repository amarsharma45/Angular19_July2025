import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  constructor(private http: HttpClient) {}
CombinedName: string = '';
  userId: number = 1;
  name: string = 'admin';
  password: string = 'password123';
  token: string = '';
  login(userId:number, Name:string){
    // alert(' -- Login button clicked!');
    // this.CombinedName =  'Logged in with' + userId+' '+Name;
  
    const loginData = {
      username: this.name,
      password: this.password
    };

      this.http.post<any>('https://amarsharma-cafse9c4dzgbf2hc.eastus2-01.azurewebsites.net/api/auth/login', loginData)
        .subscribe({
          next: (response) => {
            this.token = response.token;
            localStorage.setItem('token', this.token);
            alert('Login successful!');
          },
          error: (err) => {
            alert('Login failed: ' + err.error);
          }
        });
    
  }
}
