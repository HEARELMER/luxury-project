import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-cards',
  standalone: true,
  imports: [],
  templateUrl: './content-cards.component.html',
  styleUrl: './content-cards.component.scss'
})
export class ContentCardsComponent {
  @Input() titleContainer:string = 'Titulode cotenedor';
  @Input() detailsContainer:string = 'Detalle cotenedor'
  @Input() detailsConta:string = 'Detalle cotenedor'
}

