import { Serializable } from '../class/serializable';

export class Icono extends Serializable {

	id: number;
	path: string;
	codigo: string;
	descripcion: string;

	constructor() {
		super();
	}

}
