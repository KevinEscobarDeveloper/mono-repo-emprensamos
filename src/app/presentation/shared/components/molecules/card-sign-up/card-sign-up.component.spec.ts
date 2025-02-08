import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSignUpComponent } from './card-sign-up.component';

describe('CardSignUpComponent', () => {
  let component: CardSignUpComponent;
  let fixture: ComponentFixture<CardSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
