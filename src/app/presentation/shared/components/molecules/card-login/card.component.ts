import { Component} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public class = 'login-input';
  public firstText = 'correo@example.com';
  public secondText = 'Introduce tu contraseña';
  public btnText = 'Iniciar sesión';
}
