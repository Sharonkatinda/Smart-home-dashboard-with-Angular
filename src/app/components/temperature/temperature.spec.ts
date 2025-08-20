import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
  temperature: number = 24;

  refreshTemperature() {
    this.temperature = Math.floor(Math.random() * (32 - 18 + 1)) + 18; // Simulated 18–32 °C
  }
}
