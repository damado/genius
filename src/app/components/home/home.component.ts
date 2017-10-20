import { Component, OnInit } from '@angular/core';
import { PromocionService } from '../../services/promocion.service';
import { Producto } from '../../class/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public productos: Array<Producto>;

  constructor(protected promocionService: PromocionService) { }

  ngOnInit() {
		this.promocionService.getUltimos5Productos().subscribe(productos => {
			this.productos = productos;
		});
  }

}
