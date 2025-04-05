import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vacations',
  imports: [CommonModule],
  templateUrl: './vacations.component.html',
  styleUrl: './vacations.component.css'
})
export class VacationsComponent {

  vacations = [
    {
      title: 'Singapore & Malaysia',
      date: 'Feb 2025',
      description: 'A 6-day trip exploring Sentosa, Universal Studios, and Genting Highlands.',
      image: '/assets/andaman.jpg'
    },
    {
      title: 'Andaman Islands',
      date: 'Oct 2024',
      description: 'Beach vibes, snorkeling, and Radhanagar sunsets with family.',
      image: '/assets/andaman.jpg'
    },
    {
      title: 'Pondicherry Road Trip',
      date: 'Mar 2025',
      description: 'A serene 3-day drive with French colonial charm.',
      image: '/assets/andaman.jpg'
    }
  ];
}
