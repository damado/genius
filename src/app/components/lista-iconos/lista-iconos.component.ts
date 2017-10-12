import { Component, OnInit, Input } from '@angular/core';
import { Icono } from '../../class/icono';

@Component({
  selector: 'app-lista-iconos',
  templateUrl: './lista-iconos.component.html',
  styleUrls: ['./lista-iconos.component.css']
})
export class ListaIconosComponent implements OnInit {

	@Input() iconos: Array<Icono>;

  constructor() { }

  ngOnInit() {
  }

}
