import { Component } from '@angular/core';

@Component({
  selector: 'app-card-sign-up',
  standalone: false,

  templateUrl: './card-sign-up.component.html',
  styleUrl: './card-sign-up.component.scss',
})
export class CardSignUpComponent {
  public textName = 'Nombre';
  public textLastname = 'Apellido';
  public textEmail = 'Correo electrónico';
  public textPassword = 'Contraseña';
  public textConfirmPassword = 'Confirmar contraseña';
  public btnText = 'Crear cuenta';
  public btnSignUp = 'Registrate con Google';
  public btnSignUp2 = 'Registrate con Apple';
}
