import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocDeliverComponent } from './loc-deliver.component';

describe('LocDeliverComponent', () => {
  let component: LocDeliverComponent;
  let fixture: ComponentFixture<LocDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
