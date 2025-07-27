import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-calculation',
  imports: [DatePipe, FormsModule],
  templateUrl: './simple-calculation.html',
  styleUrl: './simple-calculation.css'
})
export class SimpleCalculation {
  pageName = 'Home Page';
  currentDate?: Date;
  num1 = 0;
  num2 = 0;
  constructor() {
    if (!this.currentDate) {
      this.MytestFunction();
    }
  }


  MytestFunction() {
    this.currentDate = new Date();
  }
  Calculate(Num1: number, Num2: number): number {
    return Num1 + Num2;

  }
}
