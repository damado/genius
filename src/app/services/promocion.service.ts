import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../class/producto';
import { Imagen } from '../class/imagen';
import { Icono } from '../class/icono';
import { Comentario } from '../class/comentario';
import { BasesYCondiciones } from '../class/bases-y-condiciones';
import { TipoProducto } from '../class/tipo-producto';
import { environment } from '../../environments/environment';

@Injectable()
export class PromocionService {

	private url = environment.api_url;

  constructor(private http: Http) { }

  /**
  * Retorna todos los productos.
  **/
  getProductos(idTipo: number) {
    return this.http.get(this.url + 'tipos_productos/' + idTipo + '/productos').map((response) => {
  		return response.json().map((producto) => {
        const prod = new Producto().fromJSON(producto);
        prod.setImagenes(producto.imagenes.map(imagen => new Imagen().fromJSON(imagen)));
        prod.setIconos(producto.iconos.map(icono => new Icono().fromJSON(icono)));
  			return prod;
  		});
  	});
  }

  /**
  * Busca un producto por id.
  **/
  getProductoPorId(id: number) {
    return this.http.get(this.url + 'productos/' + id).map((producto) => {
      const prod = new Producto().fromJSON(producto.json());
      prod.setImagenes(producto.json().imagenes.map(imagen => new Imagen().fromJSON(imagen)));
      prod.setComentarios(producto.json().comentarios.map(comentario => new Comentario().fromJSON(comentario)));
      prod.setBasesYCondiciones(new BasesYCondiciones().fromJSON(producto.json().bases_y_condiciones));
      prod.setIconos(producto.json().iconos.map(icono => new Icono().fromJSON(icono)));
      console.log(prod);
      return prod;
    });
  }

  /**
  * Busca todos los tipos de productos.
  **/
  getTiposProductos() {
    return this.http.get(this.url + 'tipos_productos').map((response) => {
      return response.json().map((tipoProducto) => {
        const tipo = new TipoProducto().fromJSON(tipoProducto);
        return tipo;
      });
    });
  }

}
