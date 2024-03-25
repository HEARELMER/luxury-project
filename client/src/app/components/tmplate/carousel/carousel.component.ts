import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, Renderer2 } from '@angular/core';

import { CardComponent } from '../../atoms/card/card.component';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import {register} from 'swiper/element/bundle'
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

register()

@Component({
  selector: 'app-carousel',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CardComponent, ButtonsComponent,NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  dataCard:any[] =[
    {
        namePlace: 'Aguas Turquesas',
        image:'https://fresac.pe/wp-content/uploads/2021/04/Millpu.jpg',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '45'
    },
    {
        namePlace: 'Catarata Pumacocha',
        image:'https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/13163132/70928067_103581854376236_9028388690644172800_n.jpg',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '15'
    },
    {
        namePlace: 'VilcasHuaman',
        duration:'Full day',
        image:'./assets/imagenes/vilcas.webp',
        hour:'9:30 - 5:00 pm', 
        price: '15'
    },
    {
        namePlace: 'Pampas de Ayacucho',
        image:'./assets/imagenes/quinua-full.webp',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '55'
    },
    {
        namePlace: 'Aguas Turquesas',
        image:'https://fresac.pe/wp-content/uploads/2021/04/Millpu.jpg',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '45'
    },
    {
        namePlace: 'Catarata Pumacocha',
        image:'https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/13163132/70928067_103581854376236_9028388690644172800_n.jpg',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '15'
    },
    {
        namePlace: 'VilcasHuaman',
        duration:'Full day',
        image:'./assets/imagenes/vilcas.webp',
        hour:'9:30 - 5:00 pm', 
        price: '15'
    },
    {
        namePlace: 'Pampas de Ayacucho',
        image:'./assets/imagenes/quinua-full.webp',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '55'
    }
]
  @Input() imagesData:any[]=[];

  isdarkMode: boolean = false;
  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    });
  }

}