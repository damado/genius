import { Serializable } from '../class/serializable';

export class Comentario extends Serializable {

	id: number;
	comentario: string;

	constructor() {
		super();
	}

}
