import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-in-template',
  imports: [],
  templateUrl: './loop-in-template.html',
  styleUrl: './loop-in-template.css'
})
export class LoopInTemplate {
  students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 23 }
  ];
  studentinfo = '';
  getStudentInfo(student: { name: string; age: number }) {
    console.log(`Student: ${student.name}, Age: ${student.age}`);
    this.studentinfo =`${student.name} is ${student.age} years old.`;
    return this.studentinfo;
  }
}
