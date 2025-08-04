import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService // Inject token service
  ) {}

  name: string = '';
  password: string = '';
  token: string = '';

  login(): void {
        console.log('Username:', this.name);
    console.log('Password:', this.password);  
    const loginData = {
      username: this.name,
      password: this.password,

    };
    this.http
      .post<any>('https://amarsharma-cafse9c4dzgbf2hc.eastus2-01.azurewebsites.net/api/auth/login', loginData)
      .subscribe({
        next: (response) => {
          this.token = response.token;

          //this.tokenService.setToken(this.token);
          this.tokenService.setToken(this.token);
          this.router.navigate(['/get-api-data']); // or another home route
          alert('Login successful!');
         // this.router.navigate(['/get-api-data']); // or your landing page
        },
        error: (err) => {
          alert('Login failed: ' +"Invalid username or password");
        },
      });
  }

}
