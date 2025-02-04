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
  @Input() icon: any = '';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<void>();
  clicked: any;

onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
}
}
