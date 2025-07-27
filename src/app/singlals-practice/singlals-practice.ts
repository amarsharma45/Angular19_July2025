import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-singlals-practice',
  imports: [],
  templateUrl: './singlals-practice.html',
  styleUrl: './singlals-practice.css'
})
export class SinglalsPractice {
  // Add any properties or methods needed for the component here
  title = 'Signals Practice';
  description = 'This component is for practicing Angular signals.';
  counter = signal(10);
  counter_Norm = 12;
  np= 0;
  np_Norm = 0;

  // Using signals to track changes

  Data = signal<number | string>(10)
  computedSignal:Signal<Number>=computed(() => {
    return this.counter() + 10;});

  Value1 = signal(10);
  Value2 = signal(20);
  SumofVals= computed(()=>{
    return this.Value1()+this.Value2();
  })

  myCount = signal(0);
  myCountValueStore = 0;
  constructor()
  {
    effect(() => {
      this.np = this.counter();
      this.np_Norm = this.counter_Norm;
      this.myCountValueStore = this.myCount();
    });
  }
  IncreaseCount()
  {
    this.myCount.set(this.myCount()+1);
  }
  DecreaseCount()
  {
    if(this.myCount() > 0)
    {
      this.myCount.set(this.myCount()-1);
    }
 
    // this.userName.update(value => value + 1); // will not work as it is string}
  }
  updateSignal() {
   this.counter.set(this.counter()+1);
   this.Data.set("Amar")
   this.Data.update(value=>value + " Singh");
   // this.Data.update(value=>value + 1);// will not work as it is string
  }
  updateProperty() {
   this.counter_Norm++;
  }
  updateComputedSignal()
  {
    console.log("Sum of Values: ", this.SumofVals());
    this.Value1.set(300);
    console.log("Sum of Values: ", this.SumofVals());
  }
}
