import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../templates/header/header.component';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { CardComponent } from '../../atoms/card/card.component';
import { CarouselComponent } from '../../templates/carousel/carousel.component';
import { ContentCardsComponent } from '../../templates/content-cards/content-cards.component';
import { FooterComponent } from '../../templates/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonsComponent,
    RouterOutlet,
    CardComponent,CarouselComponent,
     ContentCardsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {




constructor() {

}

ngOnInit(): void {
    initFlowbite();
  }

}
