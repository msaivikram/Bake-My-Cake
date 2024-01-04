import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsCardComponent } from './sweets-card.component';

describe('SweetsCardComponent', () => {
  let component: SweetsCardComponent;
  let fixture: ComponentFixture<SweetsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetsCardComponent]
    });
    fixture = TestBed.createComponent(SweetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
