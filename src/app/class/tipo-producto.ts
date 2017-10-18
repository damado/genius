import { Serializable } from '../class/serializable';

export class TipoProducto extends Serializable {

	id: number;
	codigo: string;
	descripcion: string;

	constructor() {
		super();
	}

}
