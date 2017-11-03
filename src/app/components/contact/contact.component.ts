import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public formulario: FormGroup;
  public mensajeExito = null;
  private arrayChecks: Array<string> = [];

  constructor(protected fb: FormBuilder, protected contactoService: ContactoService) { }

  ngOnInit() {
  	this.formulario = this.fb.group({
  		'nombre' : ['', [Validators.required]],
  		'mail' : ['', [Validators.required, Validators.email]],
  		'numero_telefono' : [''],
      'vacaciones' : [false],
      'escapada_finde' : [false],
      'casamiento' : [false],
      'compras' : [false],
      'recuerdos_amigos' : [false],
      'sueño_viajar' : [false],
      'playa' : [false],
      'deporte_nieve' : [false],
      'crucero' : [false],
      'descubrir' : [false],
  		'cantidad_dias' : [''],
      'fecha_viaje' : [''],
  		'cantidad_personas' : [''],
  		'motivo_contacto' : [''],
  		'comentarios' : ['']
  	});
  }

  /**
  *  Envia al servicio de contacto la informacion ingresada para contactarse con la agencia.
  **/
  enviarFormulario(): void {
    const nombre = this.formulario.get('nombre').value;
    const mail = this.formulario.get('mail').value;
    const numero_telefono = this.formulario.get('numero_telefono').value;
    const cantidad_dias = this.formulario.get('cantidad_dias').value;
    const fecha_viaje = this.formulario.get('fecha_viaje').value;
    const cantidad_personas = this.formulario.get('cantidad_personas').value;
    const motivo_contacto = this.formulario.get('motivo_contacto').value;
    const comentarios = this.formulario.get('comentarios').value;
    this.contactoService.contactarAgencia(nombre, mail, numero_telefono, this.arrayChecks, cantidad_dias, fecha_viaje, cantidad_personas, motivo_contacto, comentarios);
    this.mensajeExito = 'Su información se mando con éxito. Nos mantendremos en contacto.'
  }

  /**
  *  Agrega un valor a la lista de checks, o lo elimina si el elemento ya se encuentra.
  **/
  agregarCheck(nameControl: string, value: string): void {
    if (!this.formulario.get(nameControl).value) {
      this.arrayChecks.push(value);
      return;
    }
    this.arrayChecks.splice(this.arrayChecks.indexOf(value), 1);
  }

}
