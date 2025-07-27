import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {

CombinedName: string = '';

  login(userId:number, Name:string){
    alert(' -- Login button clicked!');
    this.CombinedName =  'Logged in with' + userId+' '+Name;
  }
}
