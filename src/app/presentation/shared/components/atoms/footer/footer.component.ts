import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public socialButtons = [
    { icon: 'fa-brands fa-twitter', text: 'Twitter' },
    { icon: 'fa-brands fa-instagram', text: 'Instagram' },
    { icon: 'fa-brands fa linkedin', text: 'Linkedin' }
  ]

}
