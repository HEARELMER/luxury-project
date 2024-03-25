import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { NgClass } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonsComponent, RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  
  // listaDeOpciones: any[] = [
  vuelos:string[]=['Internacionales', 'Nacionales']
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
  contactos:string[] = ['Whatsapp', 'TikTok', 'Facebook']


  isMenuVisible:boolean = false;
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
  
 isScroll:boolean = false;
 @HostListener('window:scroll')
  onScroll() {
    const verticalOffset = window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop || 0;
    this.isScroll = verticalOffset > 0;
  }

  ngOnInit() {
    this.onScroll();
    this.getThemeService()
    this.changeMode()
  }
constructor(
  private renderer: Renderer2,
  private themeService:ThemeService) {}
isdarkMode:boolean = false;


getThemeService(){
  this.themeService.isDarkMode.subscribe((value:boolean) => {
    this.isdarkMode = value;
    console.log(this.isdarkMode);
  })
}

changeMode(){
  if(this.isdarkMode){

    this.renderer.removeClass(document.body,'bg-light-background');
    this.renderer.addClass(document.body, 'bg-dark-background');
  }else{
    this.renderer.removeClass(document.body, 'bg-dark-background');
    this.renderer.addClass(document.body, 'bg-light-background');
    
  }

}
 
toggleMode() {
  this.isdarkMode = !this.isdarkMode;
  this.changeMode();
  this.themeService.setDarkMode(this.isdarkMode); // Add this line to update the value in the service
}
}

