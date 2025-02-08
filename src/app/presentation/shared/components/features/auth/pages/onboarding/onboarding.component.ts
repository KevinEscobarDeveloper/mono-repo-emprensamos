import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  standalone: false,

  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent {
  public firstText = 'Connect Wallet';

  carousels = [
    {
      text: 'Find the people with the necessary skills to create your project',
      imgSrc: 'assets/images/skills.png',
      imgAlt: 'First Image',
    },
    {
      text: 'Join a project of your interest',
      imgSrc: 'assets/images/project.png',
      imgAlt: 'Second Image',
    },
    {
      text: 'Transactions are secure',
      imgSrc: 'assets/images/secure.png',
      imgAlt: 'Third Image',
    },
  ];
}
