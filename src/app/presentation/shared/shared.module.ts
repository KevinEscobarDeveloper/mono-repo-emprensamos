import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/molecules/card-login/card.component';
import { InputComponent } from './components/atoms/input/input.component';
import { ButttonComponent } from './components/atoms/button/button.component';
import { AuthCarouselComponent } from './components/molecules/auth-carousel/auth-carousel.component';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    ButttonComponent,
    AuthCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    InputComponent,
    ButttonComponent,
    AuthCarouselComponent,
  ],
})
export class SharedModule {}
