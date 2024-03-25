import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() text: string = 'Button';
  @Input() icon: string = 'not found';
  @Input() btnClass: string = 'btn';
  @Input() options: string[] = [];
  isMenuHovered: boolean = false;
  isHovered:boolean= false


  isdarkMode:boolean= false;
  constructor (private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    })
  }

  onMouseLeave() {
    if (!this.isMenuHovered) {
      this.isHovered = false;
    }
  }

  onMenuEnter() {
    this.isMenuHovered = true;
  }

  onMenuLeave() {
    this.isMenuHovered = false;
    this.isHovered = false; 
  }


}
