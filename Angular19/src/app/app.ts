import { DatePipe, CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,RouterModule,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [DatePipe],
  standalone: true,
})
export class App {
  protected readonly title = signal('Angular19');
    isCollapsed = false;

  sectionState = {
    auth: true,
    games: true,
    basic: true,
    control: true,
    signals: true,
    toDoList:true
  };

  toggleSection(section: keyof typeof this.sectionState): void {
    this.sectionState[section] = !this.sectionState[section];
  }
}
