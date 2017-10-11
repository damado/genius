import { Serializable } from '../class/serializable';
import { Imagen } from '../class/imagen';
import { Icono } from '../class/icono';
import { Comentario } from '../class/comentario';
import { BasesYCondiciones } from '../class/bases-y-condiciones';

export class Producto extends Serializable {

	id: number;
	id_tipo: number;
	id_bases_y_condiciones: number;
	nombre: string; 
	destino_turistico_pais: string;
	destino_turistico_lugar: string;
	fecha_alta: string;
	fecha_vigencia_desde: string;
	fecha_vigencia_hasta: string;
	descripcion: string;
	valor: string;
	imagenes: Array<Imagen>;
	iconos: Array<Icono>;
	comentarios: Array<Comentario>;
	bases_y_condiciones: BasesYCondiciones;

	constructor() {
		super();
	}

	/**	
	*	Asigna un arreglo de imagenes al producto en cuestion.
	**/
	setImagenes(imagenes: Array<Imagen>): Producto {
		this.imagenes = imagenes;
		return this;
	}

	/**
	*	Retorna el path de la imagen pincipal del producto.
	**/
	getPathImagenPrincipal(): string {
		return this.imagenes[0].path_img;
	}

	/**
	*	Asigna los iconos al producto.
	**/
	setIconos(iconos: Array<Icono>): Producto {
		this.iconos = iconos;
		return this;
	}

	/**
	*	Asigna los comentarios al producto.
	**/
	setComentarios(comentarios: Array<Comentario>): Producto {
		this.comentarios = comentarios;
		return this;
	}

	/**
	*	Asigna las bases y condiciones al producto.
	**/
	setBasesYCondiciones(basesYCondiciones: BasesYCondiciones): Producto {
		this.bases_y_condiciones = basesYCondiciones;
		return this;
	}


}
