import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

  paquetes:string[]=[
    'Luxury Express 03D/02N',
    'Luxury Tradicional 03D/02N',
    'Luxury Señorial 04D/03N',
    'Luxury donde nace el Perú 05D/04N',
   'Luxury memorable 06D/05N'
  ]
  tours:string[]=[
    'City Tours Tradicional',
    'Libertad Americana (Wari)',
    'Primer Hombre Andino (Huanta)',
     'Ruta del Inca - VilcasHuamán',
     'Los Mártires de Cangallo',
     'Joya Escondida - Millpu',
     'Grietas de Qorihuillca',
     'Piscina termal - Colpa',
     'Eco Aventura',
     'Bosque de piedras - Huaraca',
     'Mirador Halcón - Columpio Extremo',
     'Aguas Termales - Pachapupum',
     'Laguna Azul',
     'Laguna Verdeqocha',
     'Valle de cascadas - Sarhua',
    ]
}
