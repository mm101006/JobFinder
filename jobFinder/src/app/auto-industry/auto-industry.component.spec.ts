import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoIndustryComponent } from './auto-industry.component';

describe('AutoIndustryComponent', () => {
  let component: AutoIndustryComponent;
  let fixture: ComponentFixture<AutoIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
