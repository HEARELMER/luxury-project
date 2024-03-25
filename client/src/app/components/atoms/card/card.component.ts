import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonsComponent, RouterLink,NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() dataCard:any;
  isdarkMode:boolean= false;
  constructor (private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    })
  }



}
