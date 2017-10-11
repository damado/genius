import { Serializable } from '../class/serializable';

export class Imagen extends Serializable {

	id: number;
	producto_id: number;
	path_img: string;
	titulo: string;
	epigrafe: string;

	constructor() {
		super();
	}

}
