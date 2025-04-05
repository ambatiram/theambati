import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { ModalComponent } from "../../shared/modal/modal.component";
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-vacations',
  imports: [CommonModule, SharedModule],
  templateUrl: './vacations.component.html',
  styleUrl: './vacations.component.css'
})
export class VacationsComponent {

  vacations = [
    {
      title: 'Singapore & Malaysia',
      date: 'Feb 2025',
      description: 'A 6-day trip exploring Sentosa, Universal Studios, and Genting Highlands.',
      itinerary: `
        Day 1: Arrival in Singapore, visit Marina Bay Sands and Gardens by the Bay.
        Day 2: Explore Sentosa Island and Universal Studios.
        Day 3: Travel to Malaysia, visit Kuala Lumpur and Petronas Towers.
        Day 4: Explore Genting Highlands and Batu Caves.
        Day 5: Shopping and leisure in Kuala Lumpur.
        Day 6: Departure.
      `,
      image: '/assets/andaman.jpg',
      images: [
        '/assets/andaman.jpg',
        '/assets/pondy.jpg',
        '/assets/pondy.jpg',
        '/assets/andaman.jpg',
        '/assets/pondy.jpg',
      ]
    },
    {
      title: 'Andaman Islands',
      date: 'Oct 2024',
      description: 'Beach vibes, snorkeling, and Radhanagar sunsets with family.',
      itinerary: `
        Day 1: Arrival at Port Blair, visit Cellular Jail and Light & Sound Show.
        Day 2: Ferry to Havelock Island, enjoy Radhanagar Beach.
        Day 3: Snorkeling at Elephant Beach and leisure activities.
        Day 4: Return to Port Blair, visit Chidiya Tapu.
        Day 5: Departure.
      `,
      image: '/assets/andaman.jpg',
      images: [
        '/assets/andaman.jpg',
        '/assets/pondy.jpg',
        '/assets/pondy.jpg',
        '/assets/andaman.jpg',
        '/assets/pondy.jpg',
      ]
    },
    {
      title: 'Pondicherry Road Trip',
      date: 'Mar 2025',
      description: 'A serene 3-day drive with French colonial charm.',
      itinerary: `
        Day 1: Drive to Pondicherry, explore French Quarter and Promenade Beach.
        Day 2: Visit Auroville, Paradise Beach, and local cafes.
        Day 3: Leisure morning, drive back home.
      `,
      image: '/assets/andaman.jpg',
      images: [
        '/assets/andaman.jpg',
        '/assets/pondy.jpg',
        '/assets/pondy.jpg',
        '/assets/andaman.jpg',
      ]
    }
  ];

  isModalOpen = false;
  selectedVacation: any = null;
  currentImageIndex = 0;

  constructor(private renderer: Renderer2) {}


  openModal(index: number): void {
    console.log('clicked');
    this.selectedVacation = this.vacations[index];
    this.currentImageIndex = 0;
    this.isModalOpen = true;

     // Add class to body to disable scrolling
     this.renderer.addClass(document.body, 'no-scroll');
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedVacation = null;

      // Remove class from body to enable scrolling
      this.renderer.removeClass(document.body, 'no-scroll');
  }

  nextImage(): void {
    if (this.selectedVacation) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedVacation.images.length;
    }
  }

  prevImage(): void {
    if (this.selectedVacation) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedVacation.images.length) % this.selectedVacation.images.length;
    }
  }


}
