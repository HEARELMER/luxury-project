import { Component } from '@angular/core';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { info_place } from '../../../interface/info_place';


@Component({
  selector: 'app-detail-place',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './detail-place.component.html',
  styleUrl: './detail-place.component.scss'
})
export class DetailPlaceComponent {

  data:info_place={
    name_place: 'Nombre del Lugar',
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
}
