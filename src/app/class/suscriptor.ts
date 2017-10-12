import { Serializable } from '../class/serializable';

export class Suscriptor extends Serializable {

	id: number;
	mail: string;
	fecha_alta: string;
	fecha_baja: string;

	constructor() {
		super();
	}

}
