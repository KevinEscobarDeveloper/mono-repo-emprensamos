import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';


const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'onboarding', component: OnboardingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
