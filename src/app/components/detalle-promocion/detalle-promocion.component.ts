import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { PromocionService }   from '../../services/promocion.service';
import { Producto }   from '../../class/producto';

@Component({
  selector: 'app-detalle-promocion',
  templateUrl: './detalle-promocion.component.html',
  styleUrls: ['./detalle-promocion.component.css']
})
export class DetallePromocionComponent implements OnInit {

	private idProducto: number;
	public producto: Producto;

  constructor(private route: ActivatedRoute, private promocionService: PromocionService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.idProducto = parametros['id'];
      this.buscarProducto();
      window.scrollTo(0, 250);
  	});
  }

  /**
  * Invoca al servicio de promociones para obtener el producto con el id, ingresado por la url.
  **/
  buscarProducto(): void {
  	this.promocionService.getProductoPorId(this.idProducto).subscribe(producto => {
      this.producto = producto;
  	});
  }

}
