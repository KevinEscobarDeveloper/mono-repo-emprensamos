import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-carousel',
  standalone: false,

  templateUrl: './auth-carousel.component.html',
  styleUrl: './auth-carousel.component.scss'
})
export class AuthCarouselComponent {
  @Input() text: string = '';
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() carouselId: string = 'defaultCarousel';
  @Output() onClick = new EventEmitter ();
}
