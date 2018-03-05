import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailStoresComponent } from './retail-stores.component';

describe('RetailStoresComponent', () => {
  let component: RetailStoresComponent;
  let fixture: ComponentFixture<RetailStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
