import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciacionComponent } from './financiacion.component';

describe('FinanciacionComponent', () => {
  let component: FinanciacionComponent;
  let fixture: ComponentFixture<FinanciacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
