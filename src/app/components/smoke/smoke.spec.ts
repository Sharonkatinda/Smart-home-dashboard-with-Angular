import { Component } from '@angular/core';

@Component({
  selector: 'app-smoke',
  templateUrl: './smoke.component.html',
  styleUrls: ['./smoke.component.css']
})
export class SmokeComponent {
  smokeDetected = false;

  checkSmoke() {
    this.smokeDetected = Math.random() > 0.8; // 20% chance of smoke
  }
}
