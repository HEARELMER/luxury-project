import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
    constructor(private location:Location) {

    }
    close() {
      this.location.back();
    }
}
