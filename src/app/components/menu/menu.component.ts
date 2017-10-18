import { Component, OnInit, HostListener } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { TipoProducto } from '../../class/tipo-producto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	public tipos_productos: Array<TipoProducto>;

  constructor(protected promocionService: PromocionService) { }

  ngOnInit() {
		this.promocionService.getTiposProductos().subscribe(tipos => {
			this.tipos_productos = tipos;
		});
  }

}
