import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PromocionService } from '../../services/promocion.service';
import { Producto } from '../../class/producto';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  private idTipoProducto: number;
  public productos: Array<Producto> = null;

  constructor(protected promocionService: PromocionService, protected router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.idTipoProducto = parametros['id'];
      this.getProductos();
    });
  }

  /**
  * Invoca al servicio de promociones para obtener todos los productos vigentes.
  **/
  getProductos(): void {
    this.promocionService.getProductos(this.idTipoProducto).subscribe((productos) => {
      if (productos.length !== 0) {
        this.productos = productos;
        return;
      }
      this.productos = null;
  	})
  }

  /**
  * Navega hacia el detalle del producto.
  **/
  mostrarDetalleProducto(producto) {
    this.router.navigate(['promociones', producto.id]);
  }

}
