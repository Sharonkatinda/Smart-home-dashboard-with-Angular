import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
})
export class Security {
  gateOpen = false;
  doorOpen = false;

  toggleGate() {
    this.gateOpen = !this.gateOpen;
  }

  toggleDoor() {
    this.doorOpen = !this.doorOpen;
  }
}
