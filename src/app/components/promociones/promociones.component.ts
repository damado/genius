import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PromocionService } from '../../services/promocion.service';
import { Producto } from '../../class/producto';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor(protected promocionService: PromocionService, protected router: Router) { }

  public productos: Array<Producto>;

  ngOnInit() {
    this.getProductos();
  }

  /**
  * Invoca al servicio de promociones para obtener todos los productos vigentes.
  **/
  getProductos(): void {
  	this.promocionService.getProductos().subscribe((productos) => {
  		this.productos = productos;
  	})
  }

  mostrarDetalleProducto(producto) {
    this.router.navigate(['promociones', producto.id]);
  }

}
