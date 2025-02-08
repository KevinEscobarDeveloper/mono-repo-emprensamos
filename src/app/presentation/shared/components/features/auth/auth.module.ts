import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';



@NgModule({
  declarations: [
    LoginPage,
    WelcomeComponent,
    OnboardingComponent,
    SignUpComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})

export class AuthModule { }
