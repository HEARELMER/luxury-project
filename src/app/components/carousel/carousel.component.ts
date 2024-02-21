import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() imagesData:any[]=[];

  lis:any[]= [
    {'hola':'gol'},
    {'gol': 'gol'}
  ]


  
  ngOnInit(): void {
    initFlowbite();
  }
}
