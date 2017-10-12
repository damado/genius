import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Suscriptor } from '../class/suscriptor';

@Injectable()
export class SuscripcionService {

	private url = environment.api_url;

  constructor(private http: Http) { }

  /**
  * Invoca a la api para guardar un suscriptor.
  **/
  guardarSuscriptor(mail: string) {
  	const body = JSON.stringify({'mail': mail});
  	const headers = new Headers({'Content-Type': 'application/json'});
  	const options = new RequestOptions({headers: headers});
  	this.http.options(this.url + 'suscriptores');
  	this.http.post(this.url + 'suscriptores', body, options).subscribe(response => {
  		return response;
  	});
  }

  /**
  * Invoca a la api para eliminar un suscriptor.
  **/
  eliminarSuscriptor(id: number) {
    this.http.options(this.url + 'suscriptores');
    this.http.delete(this.url + 'suscriptores/' + id).subscribe(response => {
      return response;
    });
  }

  /**
  * Retorna todos los suscriptores.
  **/
  getSuscriptores() {
    return this.http.get(this.url + 'suscriptores').map((response) => {
      return response.json().map((scpt) => {
          return new Suscriptor().fromJSON(scpt);
      });
    });
  }

  /**
  * Busca un suscriptor por mail, si lo encuentra lo retorna, caso contrario retorna null.
  **/
  getSuscriptorPorMail(mail: string) {
    return this.http.get(this.url + 'suscriptores/busqueda/' + mail).map(scpt => {
      if (scpt.json().length == 0) {
        return null;
      }
      const suscriptor = new Suscriptor().fromJSON(scpt.json());
      return suscriptor;
    });
  }

}
