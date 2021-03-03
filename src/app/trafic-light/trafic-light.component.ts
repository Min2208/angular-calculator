import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafic-light',
  templateUrl: './trafic-light.component.html',
  styleUrls: ['./trafic-light.component.css']
})
export class TraficLightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lstLight = [];
  private intervalId = 0;
  count = 10;
  remainingTime = this.count;
  backgroundShow = '';
  light = '#000000';
  disableButton = 1;

  onChange(): void {
    this.lstLight.push(this.light);
    if (this.backgroundShow === '') this.backgroundShow = this.lstLight[0];
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }


  start() {
    this.disableButton = 2;
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.count;
    }
  }
  reset() {
    this.disableButton = 1;
    this.clearTimer();
    this.remainingTime = this.count;
    this.index = 0
    this.backgroundShow = this.lstLight[0];
  }
  index = 0;
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.remainingTime = this.count;
        if (this.index === this.lstLight.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        this.backgroundShow = this.lstLight[this.index];

      }
    }, 1000);
  }
}
