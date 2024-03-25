import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';
import { CarouselComponent } from '../../tmplate/carousel/carousel.component';


@Component({
  selector: 'app-somos',
  standalone: true,
  imports: [NgClass, CarouselComponent],
  templateUrl: './somos.component.html',
  styleUrl: './somos.component.scss'
})
export class SomosComponent {


  isdarkMode:boolean= false;
  constructor (private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    })
  }
}
