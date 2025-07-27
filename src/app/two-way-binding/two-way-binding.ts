import { Component } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css'
})
export class TwoWayBinding {
  name='Amar';
  txt="";
  changeName(event:Event)
  {
    this.txt=(event.target as HTMLInputElement).value;
  }
}
