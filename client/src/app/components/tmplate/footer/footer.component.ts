import { Component } from '@angular/core';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonsComponent, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isdarkMode:boolean= false;
  constructor (private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    })
  }
}
