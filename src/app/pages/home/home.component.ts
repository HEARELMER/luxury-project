import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { initFlowbite } from 'flowbite';
import { ButtonsComponent } from '../../components/buttons/buttons.component';
import { CardComponent } from '../../components/card/card.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ContentCardsComponent } from '../../components/content-cards/content-cards.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ButtonsComponent, CardComponent,CarouselComponent, ContentCardsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
        image:'data:image/jpeg;base64,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',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '15'
    },
    {
        namePlace: 'Pampas de Ayacucho',
        image:'https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/08/04/000796116W.jpg',
        duration:'Full day',
        hour:'9:30 - 5:00 pm', 
        price: '55'
    }
]

imagesData:any[]=[
    {
        
        namePlace: 'Catarata Cangallo',
        location: 'Cangallo', 
        image: 'https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/13163132/70928067_103581854376236_9028388690644172800_n.jpg'
    },
    {
        namePlace: 'Pampas de Ayacucho',
        location: 'Quinua',
        image:'https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/08/04/000796116W.jpg' 
    },
    {
        namePlace: 'Aguas turquesas',
        location: 'Circamarca',
        image:'https://fresac.pe/wp-content/uploads/2021/04/Millpu.jpg'
    }
]


constructor() {

}

ngOnInit(): void {
    initFlowbite();
  }

}
