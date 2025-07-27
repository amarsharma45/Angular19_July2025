import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow-else-if',
  imports: [],
  templateUrl: './controlflow-else-if.html',
  styleUrl: './controlflow-else-if.css'
})
export class ControlflowElseIf {
  buttonText: string = 'Click Me to Make it blue';
  toggle: boolean = true;

  ChangeColor() {
    this.toggle=!this.toggle;
    //this.buttonText = this.toggle ? 'Click Me to Make it blue' : 'Click Me to Make it red';
  }
}
