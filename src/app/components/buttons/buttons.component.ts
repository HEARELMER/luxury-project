import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() text: string = 'Button';
  @Input() icon: string = 'not found';
  @Input() btnClass: string = 'btn';
}
