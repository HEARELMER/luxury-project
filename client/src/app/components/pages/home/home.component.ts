import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { CardComponent } from '../../atoms/card/card.component';

import { InicioComponent } from '../inicio/inicio.component';
import { FooterComponent } from '../../tmplate/footer/footer.component';
import { ContentCardsComponent } from '../../tmplate/content-cards/content-cards.component';
import { CarouselComponent } from '../../tmplate/carousel/carousel.component';
import { HeaderComponent } from '../../tmplate/header/header.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ButtonsComponent,
    RouterOutlet,
    CardComponent,
    CarouselComponent,
    ContentCardsComponent,
    FooterComponent,
    RouterLink,
    InicioComponent,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isdarkMode: boolean = false;
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    });
  }

  ngOnInit(): void {
    initFlowbite();
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
