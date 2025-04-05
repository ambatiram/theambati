import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule, ModalComponent],
  exports: [ModalComponent] // Export it so other modules can use it
})
export class SharedModule { }
