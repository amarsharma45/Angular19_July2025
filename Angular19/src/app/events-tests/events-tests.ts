import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-tests',
  imports: [FormsModule],
  templateUrl: './events-tests.html',
  styleUrl: './events-tests.css'
})
export class EventsTests {

  eventName: string = '';
  btneventName: string = '';
  TextBoxValue: string = '';
  EventName: string = '';
  MytxtBoxValue: string = '';
  lblValue: string = '';
  handleMouseEvent(event:MouseEvent): void
  {
    console.log(event.type);
    console.log((event.target as Element).className);
    console.log((event.target as Element).innerHTML);
    // console.log(event.target.className);
    // console.log(event.target.innerHTML);
    console.log('Event handled',event);
    this.eventName ="Your Event is: " + event.type;
  }
  myButtonClick(event: any): void
  {
    this.btneventName = "Your Button Event is: [" + event.type + "] and  You damn clicked on this button ... !!, very bad";
  }
  mytextBoxFunction(event: Event): void
  {
    console.log(event.type);
    this.TextBoxValue=(event.target as HTMLInputElement).value;
    console.log("Value is : " + this.TextBoxValue);
  }
  mytextBoxFocus(event: FocusEvent): void
  {
    this.EventName= "event  is : " + event.type ;
    console.log(this.EventName);
  }
  getValue()
  {
      console.log()
    this.lblValue=this.MytxtBoxValue;
  }
  setValue(val:string)
  {
   
      console.log(val)
      this.MytxtBoxValue=val;
  }
}
