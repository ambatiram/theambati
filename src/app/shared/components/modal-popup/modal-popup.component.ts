import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  imports: [CommonModule],
  templateUrl: './modal-popup.component.html',
  styleUrl: './modal-popup.component.css'
})
export class ModalPopupComponent {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
