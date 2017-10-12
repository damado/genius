import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public formulario: FormGroup;

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {
  	this.formulario = this.fb.group({
  		'nombre' : ['', [Validators.required]],
  		'mail' : ['', [Validators.required, Validators.email]],
  		'numero_telefono' : [''],
  		'vacaciones' : [''],
  		'escapada_finde' : [''],
  		'casamiento' : [''],
  		'compras' : [''],
  		'recuerdos_amigos' : [''],
  		'sueño_viajar' : [''],
  		'playa' : [''],
  		'deporte_nieve' : [''],
  		'crucero' : [''],
  		'descubrir' : [''],
  		'cantidad_dias' : [''],
      'fecha_viaje' : [''],
  		'cantidad_personas' : [''],
  		'motivo_contacto' : [''],
  		'comentarios' : ['']
  	});
  }

  enviarFormulario(): void {
  	console.log(this.formulario.value);
  }

}
