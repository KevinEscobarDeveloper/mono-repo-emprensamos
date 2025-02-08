import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,

  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButttonComponent {

  @Input() text: string = '';
  @Input() type: string = 'button';
  @Input() class: string = '';
  @Input() icon?: string = '';
  @Input() disabled: boolean = false;
  // Atributos para el carousel
  @Input() dataBsTarget: string = '';  // Ejemplo: "#carouselExample"
  @Input() dataBsSlide: string = '';   // Ejemplo: "prev" o "next"

  @Output() click = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
}
