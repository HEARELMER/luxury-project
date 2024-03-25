import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  @Input() title:string='Undifined'

  @Input() data:any [] = []
  isdarkMode:boolean= false;
  constructor (private themeService: ThemeService) {
    this.themeService.isDarkMode.subscribe((value) => {
      this.isdarkMode = value;
    })
  }
}
