import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { info_place } from '../../../interface/info_place';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';
import {register} from 'swiper/element/bundle'

register()

@Component({
  selector: 'app-detail-place',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ButtonsComponent, NgClass],
  templateUrl: './detail-place.component.html',
  styleUrl: './detail-place.component.scss'
})
export class DetailPlaceComponent {

  data:info_place={
    name_place: 'Valle de Cascadas Sarhua',
    subname_place: 'Subnombre del Lugar',
    price: 100, 
    duration: [
      { type_duration: 'Tipo 1', hour: '1 hora' },
      { type_duration: 'Tipo 2', hour: '2 horas' }
    ],
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum dicta nemo possimus sapiente placeat iste aliquid et, quo velit ducimus fugiat doloribus quos aut voluptatem totam, quisquam fugit alias.',
    include: ['Incluido 1', 'Incluido 2'],
    no_include: ['No incluido 1', 'No incluido 2'],
    recomendation: ['Recomendación 1', 'Recomendación 2'],
    note: ['Nota 1', 'Nota 2'],
    condition: ['Condición 1', 'Condición 2']
  
  }

  isdarkMode:boolean= false;
  constructor (private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    })
  }
}
