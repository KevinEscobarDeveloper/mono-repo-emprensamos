import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButttonComponent } from './button.component';

describe('ButttonComponent', () => {
  let component: ButttonComponent;
  let fixture: ComponentFixture<ButttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
