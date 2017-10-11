import { Serializable } from '../class/serializable';

export class BasesYCondiciones extends Serializable {

	id: number;
	texto: string;
	vigencia_desde: string;
	vigencia_hasta: string;

	constructor() {
		super();
	}

}
