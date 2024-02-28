import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { initFlowbite } from 'flowbite';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { CardComponent } from '../../components/card/card.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ContentCardsComponent } from '../../components/content-cards/content-cards.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
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
