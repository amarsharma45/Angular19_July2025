import { Component, Input,Output,EventEmitter ,ElementRef,ViewChild} from '@angular/core';
import { Employee } from '../../../models/employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-model-edit',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-model-edit.html',
  styleUrl: './employee-model-edit.css',
  standalone: true,
})
export class EmployeeModelEdit {
  @ViewChild('modalDialog') modalDialog!: ElementRef;
  @Input() employee!:Employee;
  @Input() isEditMode!: boolean;
  @Output() save = new EventEmitter<Employee>();
  @Output() close = new EventEmitter<void>();
    onSave(): void {
    this.save.emit(this.employee);
  }
 
 
  onClose(): void {
    debugger;
    this.close.emit();
    this.isEditMode=false;

  }
  ngAfterViewInit(): void {
  this.centerModalInitially();
  this.makeModalDraggable();
}


  centerModalInitially(): void {
  const dialog = this.modalDialog.nativeElement;
  const modalWidth = dialog.offsetWidth;
  const modalHeight = dialog.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  dialog.style.position = 'absolute';
  dialog.style.left = `${(windowWidth - modalWidth) / 2}px`;
  dialog.style.top = `${(windowHeight - modalHeight) / 2}px`;
}
makeModalDraggable() {
  const dialog = this.modalDialog.nativeElement;
  const header = dialog.querySelector('.modal-header') as HTMLElement;

  if (!dialog || !header) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  header.onmousedown = (e: MouseEvent) => {
    isDragging = true;
    const rect = dialog.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    dialog.style.position = 'absolute';
   // dialog.style.margin = '0';
    dialog.style.zIndex = '1055';
  };

  document.onmousemove = (e: MouseEvent) => {
    if (isDragging) {
      const modalWidth = dialog.offsetWidth;
      const modalHeight = dialog.offsetHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let newLeft = e.clientX - offsetX;
      let newTop = e.clientY - offsetY-25;

      // Prevent dragging outside the left/top
      if (newLeft < 0) newLeft = 0;
      if (newTop < 0) newTop = 0;

      // Prevent dragging outside right/bottom
      if (newLeft + modalWidth > windowWidth) {
        newLeft = windowWidth - modalWidth;
      }
      if (newTop + modalHeight > windowHeight) {
        newTop = windowHeight - modalHeight;
      }

      dialog.style.left = `${newLeft}px`;
      dialog.style.top = `${newTop}px`;
    }
  };

  document.onmouseup = () => {
    isDragging = false;
  };
}

}

