import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactoService {

	private url = environment.api_url;

  constructor(private http: Http) { }

  contactarAgencia() {
  	const body = '';
  	const headers = new Headers({'Content-Type': 'application/json'});
  	const options = new RequestOptions({headers: headers});
  	this.http.options(this.url + 'suscriptores');
  	this.http.post(this.url + 'suscriptores', body, options).subscribe(response => {
  		return response;
  	});
  }

}
