import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-game',
  imports: [],
  templateUrl: './counter-game.html',
  styleUrl: './counter-game.css',
  standalone: true,
})
export class CounterGame {
  counterValue:number=0
  CounterClick(param:string)
   {
    {
      if(param === 'r') {
          this.counterValue=0;
      }
      else if(param==='+')
      {
          this.counterValue++;
      }
      else{
        if(this.counterValue > 0)
        {
            this.counterValue--;
        }
        else {
            this.counterValue = 0; // Prevent negative values
        }
        
      }
    }
  }
}
