import { Component } from '@angular/core';

import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { CardComponent } from '../../atoms/card/card.component';
import { AsideComponent } from '../../tmplate/aside/aside.component';
import { CarouselComponent } from '../../tmplate/carousel/carousel.component';
import { ContentCardsComponent } from '../../tmplate/content-cards/content-cards.component';
import { FooterComponent } from '../../tmplate/footer/footer.component';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports:[ButtonsComponent, AsideComponent,
    NgClass,
    CardComponent,CarouselComponent, ContentCardsComponent, 
    FooterComponent, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

    isdarkMode: boolean = false;
    constructor(private themeService: ThemeService) {
      this.themeService.isDarkMode.subscribe((value) => {
        this.isdarkMode = value;
      });
    }

  dataCard:any[] =[
   
    {
        namePlace: 'Catarata Pumacocha',
        image:'https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/13163132/70928067_103581854376236_9028388690644172800_n.jpg',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '15'
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
        namePlace: 'Cascadas de Sarhua',
        location: 'Ayacucho', 
        image:'./assets/imagenes/campanayoq.jpg'

    },
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

    currentImageIndex = 0;
    currentImage = this.imagesData[this.currentImageIndex].image;
    title:string= this.imagesData[this.currentImageIndex].namePlace;
    ngOnInit() {
        setInterval(() => {
            this.currentImageIndex++;
            if (this.currentImageIndex >= this.imagesData.length) {
                this.currentImageIndex = 0;
            }
            this.currentImage = this.imagesData[this.currentImageIndex].image;
            this.title= this.imagesData[this.currentImageIndex].namePlace;
      }, 5000);
    }

}
