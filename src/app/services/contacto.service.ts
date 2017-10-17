import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactoService {

	private url = environment.api_url;

  constructor(private http: Http) { }

  /**
  *  Se envia un post con los datos ingresados para enviarselo a la agencia.
  **/
  contactarAgencia(nombre: string, email:string, numero_telefono: string, arrayChecks: Array<string>, cantidad_dias:string, fecha_viaje: string, cantidad_personas: string, motivo_contacto: string, comentarios: string) {
    const body = this.formatearJsonBody(nombre, email, numero_telefono, arrayChecks, cantidad_dias, fecha_viaje, cantidad_personas, motivo_contacto, comentarios);
    console.log(body);
  	const headers = new Headers({'Content-Type': 'application/json'});
  	const options = new RequestOptions({headers: headers});
    this.http.options(this.url + 'contacto');
    this.http.post(this.url + 'contacto', body, options).subscribe(response => {
  		return response;
  	});
  }

  /**
  *  Le da formato al request para enviar la informacion de contacto a la agencia.
  **/
  formatearJsonBody(nombre: string, email:string, numero_telefono: string, arrayChecks: Array<string>, cantidad_dias:string, fecha_viaje: string, cantidad_personas: string, motivo_contacto: string, comentarios: string) {
    return JSON.stringify({
      'nombre': nombre,
      'email': email,
      'numero_telefono': numero_telefono,
      'checks': arrayChecks,
      'cantidad_dias': cantidad_dias,
      'fecha_viaje': fecha_viaje,
      'cantidad_personas': cantidad_personas,
      'motivo_contacto': motivo_contacto,
      'comentarios': comentarios,
    });
  }

}
