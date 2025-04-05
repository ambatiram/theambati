import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalPopupComponent } from './components/modal-popup/modal-popup.component';

@NgModule({
  imports: [CommonModule, ModalComponent, ModalPopupComponent],
  exports: [ModalComponent, ModalPopupComponent] // Export it so other modules can use it
})
export class SharedModule { }
