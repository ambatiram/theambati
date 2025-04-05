import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-kids-corner',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './kids-corner.component.html',
  styleUrls: ['./kids-corner.component.css']
})
export class KidsCornerComponent implements AfterViewInit {

  timelineEvents = [
    { 
      date: 'Jan 2020', 
      title: 'First Steps', 
      image: '/assets/kids/andaman.jpg', 
      largeImage: '/assets/kids/andaman.jpg',
      description: 'Our little one took their very first steps! A magical moment filled with wobbles and giggles.' 
    },
    { 
      date: 'Dec 2021', 
      title: 'Started Kindergarten', 
      image: '/assets/kids/andaman.jpg', 
      largeImage: '/assets/kids/andaman.jpg',
      description: 'The first day of school! A backpack bigger than them and lots of excitement.'
    },
    { 
      date: 'Aug 2022', 
      title: 'Drew First Family Portrait', 
      image: '/assets/kids/andaman.jpg', 
      largeImage: '/assets/kids/andaman.jpg',
      description: 'An adorable crayon masterpiece! Our family has never looked better.'
    },
    { 
      date: 'May 2023', 
      title: 'Won Drawing Contest', 
      image: '/assets/kids/andaman.jpg', 
      largeImage: '/assets/kids/andaman.jpg',
      description: 'Our little artist’s first award-winning piece. Creativity at its finest!'
    }
  ];
  
  selectedEvent: any = null;
  selectedIndex: number = 0;
  
  openModal(index: number) {
    this.selectedIndex = index;
    this.selectedEvent = this.timelineEvents[index];
  }
  
  closeModal() {
    this.selectedEvent = null;
  }
  
  nextEvent() {
    if (this.selectedIndex < this.timelineEvents.length - 1) {
      this.openModal(this.selectedIndex + 1);
    }
  }
  
  prevEvent() {
    if (this.selectedIndex > 0) {
      this.openModal(this.selectedIndex - 1);
    }
  }

  constructor(private elRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkFadeIn();
  }

  ngAfterViewInit(): void {
    this.checkFadeIn();
  }

  checkFadeIn() {
    const elements = this.elRef.nativeElement.querySelectorAll('.fade-in-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
}
