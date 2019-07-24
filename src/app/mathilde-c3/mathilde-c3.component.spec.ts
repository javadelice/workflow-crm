import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathildeC3Component } from './mathilde-c3.component';

describe('MathildeC3Component', () => {
  let component: MathildeC3Component;
  let fixture: ComponentFixture<MathildeC3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathildeC3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathildeC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
