import { Component } from '@angular/core';
import { KidsCornerComponent } from '../kids-corner/kids-corner.component';
import { VacationsComponent } from "../vacations/vacations.component";

@Component({
  selector: 'app-main-content',
  imports: [KidsCornerComponent, VacationsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
