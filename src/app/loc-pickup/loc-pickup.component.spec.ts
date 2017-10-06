import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocPickupComponent } from './loc-pickup.component';

describe('LocPickupComponent', () => {
  let component: LocPickupComponent;
  let fixture: ComponentFixture<LocPickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocPickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
