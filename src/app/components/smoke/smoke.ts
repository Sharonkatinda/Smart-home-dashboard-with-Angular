import { Component } from '@angular/core';

@Component({
  selector: 'app-smoke',
  templateUrl: './smoke.html',
})
export class Smoke {
  smokeDetected = false;

  checkSmoke() {
    this.smokeDetected = Math.random() < 0.5; // randomly detect smoke
  }
}
