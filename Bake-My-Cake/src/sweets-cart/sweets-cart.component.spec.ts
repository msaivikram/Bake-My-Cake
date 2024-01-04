import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsCartComponent } from './sweets-cart.component';

describe('SweetsCartComponent', () => {
  let component: SweetsCartComponent;
  let fixture: ComponentFixture<SweetsCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetsCartComponent]
    });
    fixture = TestBed.createComponent(SweetsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
