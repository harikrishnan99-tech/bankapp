import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordchComponent } from './passwordch.component';

describe('PasswordchComponent', () => {
  let component: PasswordchComponent;
  let fixture: ComponentFixture<PasswordchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
