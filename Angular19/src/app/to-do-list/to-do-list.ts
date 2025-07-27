import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css'
})
export class ToDoList {
    task = "";
    taskList:{id:number,task:string}[]=[];

    AddNewTask() {
      this.taskList.push(
        {id: this.taskList.length + 1 , task: this.task},
      );
      console.log(this.taskList);
    }
    deletTask(taskId:number)
    {
     this.taskList= this.taskList.filter(a=>a.id!=taskId);
    }
}
