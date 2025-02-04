import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';



@NgModule({
  declarations: [
    LoginPage,
    WelcomeComponent,
    OnboardingComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})

export class AuthModule { }
