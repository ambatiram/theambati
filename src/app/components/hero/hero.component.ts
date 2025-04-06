import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  isPaused = false;
  barkSound = new Audio('/assets/sounds/bingo-bark.wav');

  ngOnInit() {
    this.barkSound = new Audio('/assets/sounds/bingo-bark.wav');
  }

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
    this.barkSound.currentTime = 0;
    this.barkSound.play();
  }

  bark() {
    this.barkSound.currentTime = 0;
    this.barkSound.play();
  }
}
