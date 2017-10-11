import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIconosComponent } from './lista-iconos.component';

describe('ListaIconosComponent', () => {
  let component: ListaIconosComponent;
  let fixture: ComponentFixture<ListaIconosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIconosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
