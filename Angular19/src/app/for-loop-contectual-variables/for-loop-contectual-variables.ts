import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-for-loop-contectual-variables',
  imports: [CommonModule],
  templateUrl: './for-loop-contectual-variables.html',
  styleUrl: './for-loop-contectual-variables.css'
})
export class ForLoopContectualVariables {
  users=["John", "Jane", "Doe", "Alice", "Bob", "Charlie", "Eve", "Frank", "Grace", "Hank"];
  //users=[];
    // users= [
    //     { name: 'John', age: 25 },  
    //     { name: 'Jane', age: 30 },
    //     { name: 'Doe', age: 22 },
    //     { name: 'Alice', age: 28 },
    //     { name: 'Bob', age: 35 },
    //     { name: 'Charlie', age: 27 },
    //     { name: 'Eve', age: 29 },
    //     { name: 'Frank', age: 31 },
    //     { name: 'Grace', age: 24 },
    //     { name: 'Hank', age: 26 }
    // ];
}
