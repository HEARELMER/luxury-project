import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonsComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() dataCard:any
}
