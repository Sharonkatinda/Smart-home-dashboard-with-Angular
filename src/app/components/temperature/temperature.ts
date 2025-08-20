import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.html',
})
export class Temperature {
  temperature: number = 22; // default value

  refreshTemperature() {
    this.temperature = Math.floor(Math.random() * 10) + 20; // random 20–30 °C
  }
}
