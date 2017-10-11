import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePromocionComponent } from './detalle-promocion.component';

describe('DetallePromocionComponent', () => {
  let component: DetallePromocionComponent;
  let fixture: ComponentFixture<DetallePromocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePromocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
