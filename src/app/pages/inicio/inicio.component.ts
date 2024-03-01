import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { CardComponent } from '../../components/card/card.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ContentCardsComponent } from '../../components/content-cards/content-cards.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { defer } from 'rxjs';
import { AsideComponent } from '../../components/aside/aside.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports:[ButtonsComponent, AsideComponent,
    CardComponent,CarouselComponent, ContentCardsComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

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

imagesData:any[]=[
    {
        
        namePlace: 'Ayacucho',
        location: 'Ayacucho', 
        image:'./assets/imagenes/huamanga.webp'

    },
    {
        
        namePlace: 'Pachapupum',
        location: 'Huancasancos', 
        image:'./assets/imagenes/pachapupum.webp'

    },
    {
        namePlace: 'Pampas de Ayacucho',
        location: 'Quinua',
        image:'./assets/imagenes/quinua-full.webp'
 
    },
    {
        namePlace: 'VilcasHuamán',
        location: 'VilcasHuamán',
        image:'./assets/imagenes/vilcas.webp'
 
    },
    {
        namePlace: 'Aguas turquesas',
        location: 'Circamarca',
        image:'./assets/imagenes/millpu.webp'
    }
]

ngOnInit(): void {
  initFlowbite();
}

}
