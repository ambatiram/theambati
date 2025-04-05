import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  isPaused = false;
  audio = new Audio('/assets/sounds/bingo-bark.wav');

  togglePause(bingo: HTMLElement) {
    console.log('Toggling pause');
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      bingo.classList.add('paused');
    } else {
      bingo.classList.remove('paused');
    }
  }

  playBark() {
    console.log('Bark!');
    this.audio.currentTime = 0;
    this.audio.play();
  }
}
