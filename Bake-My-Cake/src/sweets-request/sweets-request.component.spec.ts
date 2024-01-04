import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsRequestComponent } from './sweets-request.component';

describe('SweetsRequestComponent', () => {
  let component: SweetsRequestComponent;
  let fixture: ComponentFixture<SweetsRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetsRequestComponent]
    });
    fixture = TestBed.createComponent(SweetsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
