import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
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
